import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';

const Localizacao = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissão de Localização', 'Desculpe, precisamos de permissão para acessar a localização.');
      }
    })();
  }, []);

  const getLocation = async () => {
    const { coords } = await Location.getCurrentPositionAsync({});
    setLocation(`${coords.latitude}, ${coords.longitude}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Localização</Text>
      {location && (
        <Text style={styles.locationText}>Localização Atual: {location}</Text>
      )}
      <TouchableOpacity style={styles.manualLocationButton} onPress={getLocation}>
        <View style={styles.iconContainer}>
          <Icon name="map-pin" size={20} color="#fff" />
          <Text style={styles.manualLocationButtonText}>Definir Localização</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.logoutButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#0b114c',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  locationText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  manualLocationButton: {
    marginTop: 10,
    backgroundColor: '#ff9900',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  manualLocationButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  logoutButton: {
    marginTop: 10,
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  logoutButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Localizacao;