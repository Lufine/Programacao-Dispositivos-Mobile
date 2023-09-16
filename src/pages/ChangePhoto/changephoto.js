import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe o hook de navegação

const CameraScreen = () => {
  const navigation = useNavigation(); // Obtenha a instância de navegação

  const [capturedImage, setCapturedImage] = useState(null);

  const takePicture = () => {
    const fakeCapturedImage = '../../assets/perfil.png';
    setCapturedImage(fakeCapturedImage);
  };

  const saveImage = () => {
    alert('Imagem salva com sucesso!');
    setCapturedImage(null);
    navigation.navigate('Profile'); // Navegue para a tela 'Profile' após salvar a imagem
  };

  return (
    <View style={styles.container}>
      {capturedImage ? (
        <View style={styles.imageContainer}>
          <Image source={require("../../assets/perfil.png")} style={styles.img}/>
          <Image source={{ uri: capturedImage }} style={styles.capturedImage} />
          <TouchableOpacity style={styles.button} onPress={saveImage}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      ) : (  
        <View style={styles.imageContainer}>
          <Image source={require("../../assets/perfil.png")} style={styles.img}/>
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
    alignItems: 'center',
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
});

export default CameraScreen;
