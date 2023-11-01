import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Button, StatusBar, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import AnotherComponent from '../components/AnotherComponent';

export default function Profile({ route }) {
  const navigation = useNavigation();
  const [capturedImage, setCapturedImage] = useState(null);
  const [defaultImage, setDefaultImage] = useState(require("../../assets/user.png")); // Imagem padrão

  useEffect(() => {
    const loadCapturedImage = async () => {
      try {
        const savedImage = await AsyncStorage.getItem('capturedImage');
        console.log('Imagem do AsyncStorage:', savedImage);
        if (savedImage) {
          setCapturedImage(savedImage);
        }
      } catch (error) {
        console.error('Erro ao carregar a imagem: ' + error);
      }
    };

    loadCapturedImage();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor='#00affa'/>

      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Image source={require("../../assets/seta.png")} style={styles.voltar}/>
      </TouchableOpacity>

      {capturedImage ? (
        <TouchableOpacity onPress={() => navigation.navigate("ChangePhoto")}>
          <AnotherComponent capturedImage={capturedImage} />
        </TouchableOpacity>
      ) : (
        <Image source={defaultImage} style={styles.img} /> // Use a imagem padrão aqui
      )}

      <Text style={styles.title}>Mudar Foto</Text>
      <Text style={styles.text}>User Name</Text>
      <Text style={styles.text}>Email</Text>
      <Text style={styles.text}>Data de nascimento: xx/xx/xxxx</Text>
      <Button title="Localização" onPress={() => navigation.navigate('Localizacao')} />

      <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
        <Text style={styles.sair}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0b114c',
  },
  voltar: {
    width: 30,
    height: 30,
    marginStart: -170,
    marginTop: 60,
    marginBottom: 10,
  },
  img: {
    marginTop: 10,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 28,
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    color: "#fff",
    borderBottomWidth: 1,
    padding: 10,
    width: "80%",
    fontWeight: "bold",
    marginStart: 20,
    marginTop: 5,
    marginBottom: 18,
    fontSize: 20,
    alignSelf: "flex-start",
  },
  sair: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
    fontSize: 28,
    backgroundColor: "#f90b1c",
    borderRadius: 10,
    width: 120,
  },
});
