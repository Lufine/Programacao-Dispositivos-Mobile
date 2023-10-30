import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native'

export default function SignIn() {
    const navigation = useNavigation();

 return (
    <View style={styles.container}>

        <StatusBar barStyle="light-content" backgroundColor='#00affa'/>

        <Text style={ styles.message }>Bem-vindo ao TourneyPro!</Text>
    
        <View style={styles.containerForm}>

            <Text style={ styles.title }>Login</Text>
            <TextInput style={ styles.input } placeholder="Digite seu Login" />

            <Text style={ styles.title }>Senha</Text>
            <TextInput style={ styles.input } placeholder="Digite sua Senha" 
            secureTextEntry={ true }/>
            
            <TouchableOpacity style={ styles.button }
            onPress={ () => navigation.navigate('Home') }>
                <Text style={ styles.buttonText }>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={ styles.buttonRegister }
            onPress={ () => navigation.navigate('Register')}>
                <Text style={ styles.registerText }>Não possui uma conta? Cadastre-se!</Text>
            </TouchableOpacity>

        </View>

    </View>

  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0b114c',
    },
    message: {
        marginTop: '20%',
        marginBottom: '8%',
        paddingStart: '5%',
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
    },
    containerForm: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        marginTop: 28,
        color: '#0b114c',
        fontSize: 20,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        borderColor: '#0b114c',
        marginTop: 12,
        marginBottom: 12,
        fontSize: 16,
        padding: 10,
    },
    button: {
        backgroundColor: '#0b114c',
        width: '100%',
        borderRadius: 5,
        paddingVertical: 8 ,
        marginTop: 28,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 5,
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center',
    },
    registerText: {
        color: '#0b114c',
    }
});