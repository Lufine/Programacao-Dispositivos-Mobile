import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native'    

export default function Inscricao() {
    const navigation = useNavigation();

 return (
    <View style= { styles.container }>

    <StatusBar barStyle="light-content" backgroundColor='#00affa'/>
        
    <Text style={styles.title}>Selecione o seu jogo:</Text>

    <TouchableOpacity onPress={ () => navigation.navigate('Profile') }>
            <Image source={require('../../assets/user.png')} style={styles.button1} />
        </TouchableOpacity>

    <Image source={require('../../assets/lol.jpeg')} style={styles.img} />
    <Button title="League of Legends" onPress={ () => navigation.navigate('Formulario') } />

    <Image source={require('../../assets/valorant.jpg')} style={styles.img} />
    <Button title="Valorant" onPress={ () => navigation.navigate('Formulario') } />

    <Image source={require('../../assets/csgo.jpg')} style={styles.img} />
    <Button title="CS:GO" onPress={ () => navigation.navigate('Formulario') } />

    <Image source={require('../../assets/pubg.jpg')} style={styles.img} />
    <Button title="PUBG" onPress={ () => navigation.navigate('Formulario') } />

    
    <TouchableOpacity onPress={ () => navigation.navigate('Home') }>
        <Text style={ styles.button2 }>Voltar</Text>
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
    title: {
        fontSize: 30,
        color: '#00affa',
        fontWeight: 'bold',
        marginTop: '20%',
        marginStart: 35,
        marginBottom: 8,
    },
    img: {
        width: '80%',
        height: 90,
        marginTop: 10,
        marginBottom: 10,
    },
    button1: {
        width: 50,
        height: 50,
        position: 'absolute',
        display: 'flex',
        marginTop: -50,
        marginStart: -185,
    },
    button2: {
        color: '#000',
        fontSize: 20,
        padding: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: '#00affa',
        marginTop: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    }
});