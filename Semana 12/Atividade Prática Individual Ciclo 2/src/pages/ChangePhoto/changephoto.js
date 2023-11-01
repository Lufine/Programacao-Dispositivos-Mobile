import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Camera } from 'expo-camera';
import * as FileSystem from 'expo-file-system';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

const ChangePhoto = () => {
  const navigation = useNavigation();
  const cameraRef = useRef();

  const [capturedImage, setCapturedImage] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showRetake, setShowRetake] = useState(false);

  useEffect(() => {
    (async () => {
      const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (!hasCameraPermission) {
      alert('Você precisa permitir o acesso à câmera para usar essa funcionalidade.');
      return;
    }

    if (cameraRef.current) {
      try {
        const options = { quality: 0.5, base64: true };
        const data = await cameraRef.current.takePictureAsync(options);

        const fileName = FileSystem.documentDirectory + 'captured_image.jpg';

        await FileSystem.moveAsync({
          from: data.uri,
          to: fileName,
        });

        setCapturedImage(fileName);
        setShowConfirm(true);
        setShowRetake(true);
      } catch (error) {
        alert('Erro ao tirar a foto: ' + error);
      }
    }
  };

  const confirmImage = async () => {
    try {
      if (capturedImage) {
        console.log('Imagem capturada:', capturedImage);
        await AsyncStorage.setItem('capturedImage', capturedImage);

        setCapturedImage(null);

        navigation.reset({
          index: 0,
          routes: [{ name: 'Profile' }],
        });
      } else {
        console.error('Nenhuma imagem capturada.');
      }
    } catch (error) {
      console.error('Erro ao salvar a imagem: ' + error);
    }
  };

  const discardImage = () => {
    setCapturedImage(null);
    setShowConfirm(false);
    setShowRetake(false);
  };

  const selectImageFromGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'Você precisa permitir o acesso à galeria de imagens para usar essa funcionalidade.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 0.5,
    });

    if (!result.canceled) {
      setCapturedImage(result.uri);
      setShowConfirm(true);
      setShowRetake(true);
    }
  };

  return (
    <View style={styles.container}>
      {capturedImage ? (
        <Image source={{ uri: capturedImage }} style={[styles.capturedImage, { transform: [{ scaleX: -1 }] }]} />
      ) : (
        <View style={styles.cameraContainer}>
          <Camera
            style={styles.camera}
            ref={cameraRef}
            type={Camera.Constants.Type.front}
            ratio={'4:3'}
          >
            <View style={styles.captureButtonContainer}>
              <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
                <Text style={styles.captureButtonText}>Capturar Imagem</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.captureButton} onPress={selectImageFromGallery}>
                <Text style={styles.captureButtonText}>Escolher da Galeria</Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      )}
      <View style={styles.buttonContainer}>
        {showConfirm && (
          <TouchableOpacity style={styles.confirmButton} onPress={confirmImage}>
            <Text style={styles.buttonText}>Confirmar</Text>
          </TouchableOpacity>
        )}
        {showRetake && (
          <TouchableOpacity style={styles.discardButton} onPress={discardImage}>
            <Text style={styles.buttonText}>Tirar Outra</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  capturedImage: {
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 65,
  },
  confirmButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 15,
    marginBottom: 20,
  },
  discardButton: {
    backgroundColor: '#f90b1c',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 15,
    marginBottom: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  cameraContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
  },
  camera: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  captureButtonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  captureButton: {
    backgroundColor: '#007bff',
    marginBottom: 30,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 25,
  },
  captureButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ChangePhoto;
