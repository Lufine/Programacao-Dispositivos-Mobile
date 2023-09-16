import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native'

export default function Home() {
    const navigation = useNavigation();

 return (
    <View style= { styles.container }>

        <StatusBar barStyle="light-content" backgroundColor='#00affa'/>
        
        <Text style={styles.title}>TourneyPro</Text>

        <TouchableOpacity onPress={ () => navigation.navigate('Profile') }>
            <Image source={require('../../assets/user.png')} style={styles.button1} />
        </TouchableOpacity>

        <Text style={styles.textpri}>Bem-vindo à nossa plataforma de torneios oficiais, onde a competição encontra seu lar!</Text>

        <Image source={require('../../assets/jogos.jpeg')} style={styles.img} />


        <Text style={styles.text}>Aqui você poderá participar de torneios oficiais de diversos jogos, como League of Legends, Valorant, CS:GO, entre outros.</Text>
        
        <TouchableOpacity onPress={ () => navigation.navigate('Inscricao') }>
            <Text style={ styles.button2 }>Vamos lá!</Text>
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
    img: {
        width: 400,
        height: 300,
        marginTop: 20,
        marginBottom: 10,
    },
    title: {
        fontSize: 30,
        color: '#00affa',
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 20,
    },
    textpri: {
        fontSize: 17,
        textAlign: 'justify',
        marginTop: 20,
        marginStart: 20,
        marginEnd: 20,
        color: '#fff',
    },
    text: {
        fontSize: 14,
        textAlign: 'justify',
        marginTop: 20,
        marginStart: 20,
        marginEnd: 20,
        color: '#fff',
        marginBottom: 20,
    },
    button1: {
        width: 50,
        height: 50,
        position: 'absolute',
        display: 'flex',
        marginTop: -65,
        marginStart: -165,
    },
    button2: {
        color: '#000',
        fontSize: 20,
        padding: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: '#00affa',
        marginTop: 10,
        marginStart: 20,
        marginEnd: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    }
});