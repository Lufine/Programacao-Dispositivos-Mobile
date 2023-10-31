import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

const CameraScreen = () => {
  const navigation = useNavigation();
  const cameraRef = useRef();

  const [capturedImage, setCapturedImage] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasCameraRollPermission, setHasCameraRollPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus === 'granted');

      const { status: cameraRollStatus } = await MediaLibrary.requestPermissionsAsync();
      setHasCameraRollPermission(cameraRollStatus === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (!hasCameraPermission || !hasCameraRollPermission) {
      alert('Você precisa permitir o acesso à câmera e à galeria para usar essa funcionalidade.');
      return;
    }

    if (cameraRef.current) {
      try {
        const options = { quality: 0.5, base64: true };
        const data = await cameraRef.current.takePictureAsync(options);

        setCapturedImage(data.uri);

        MediaLibrary.createAssetAsync(data.uri)
          .then(() => {
            alert('Imagem salva com sucesso! Redirecionando para o perfil em 2 segundos.');

            setTimeout(() => {
              navigation.navigate('Profile');
            }, 2000);
          })
          .catch((error) => {
            alert('Erro ao salvar a imagem: ' + error);
          });
      } catch (error) {
        alert('Erro ao tirar a foto: ' + error);
      }
    }
  };

  const saveImage = () => {
    alert('Imagem salva com sucesso!');
    setCapturedImage(null);
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      {capturedImage ? (
        <View style={styles.imageContainer}>
          <Image source={{ uri: capturedImage }} style={styles.capturedImage} />
        </View>
      ) : (
        <View style={styles.cameraContainer}>
          <Camera
            style={styles.camera}
            ref={cameraRef}
            type={Camera.Constants.Type.front}
            ratio={'4:3'} // Defina a proporção desejada
          >
            <View style={styles.captureButtonContainer}>
              <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
                <Text style={styles.captureButtonText}>Capturar Imagem</Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 15,
    margin: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  camera: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  captureButtonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  captureButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  captureButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  capturedImage: {
    flex: 1,
    width: '100%',
  },
});

export default CameraScreen;
