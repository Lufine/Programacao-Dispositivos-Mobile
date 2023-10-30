import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

const CameraScreen = () => {
  const navigation = useNavigation();

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

    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      MediaLibrary.createAssetAsync(photo.uri)
        .then(() => {
          // Mostre uma mensagem de sucesso na interface
          alert('Imagem salva com sucesso! Redirecionando para o perfil em 3 segundos.');

          // Agende a navegação para a tela 'Profile' após 3 segundos
          setTimeout(() => {
            navigation.navigate('Profile');
          }, 3000); // 3000 milissegundos (3 segundos)
        })
        .catch((error) => {
          alert('Erro ao salvar a imagem: ' + error);
        });
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
          <Image source={require("../../assets/perfil.png")} style={styles.img} />
          <Image source={{ uri: capturedImage }} style={styles.capturedImage} />
          <TouchableOpacity style={styles.button} onPress={saveImage}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.imageContainer}>
          <Image source={require("../../assets/perfil.png")} style={styles.img} />
          <Camera
            style={styles.camera}
            type={Camera.Constants.Type.back}
            ref={(ref) => {
              this.camera = ref;
            }}
          />
          <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
            <Text style={styles.captureButtonText}>Capturar Imagem</Text>
          </TouchableOpacity>
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
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
  },
  img: {
    width: 400,
    height: 650,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  captureButton: {
    marginTop: 20,
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
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
});

export default CameraScreen;
