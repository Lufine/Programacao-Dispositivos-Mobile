import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native'

export default function Register() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            
            <StatusBar barStyle="light-content" backgroundColor='#00affa'/>

            <Text style={ styles.message }>Cadastrar-se!</Text>
        
            <View style={styles.containerForm}>

                <Text style={ styles.title }>Nome de Usuário</Text>
                <TextInput style={ styles.input } placeholder="Digite seu Nome" />

                <Text style={ styles.title }>Senha</Text>
                <TextInput style={ styles.input } placeholder="Digite sua Senha" 
                secureTextEntry={ true }/>

                <Text style={ styles.title }>E-mail</Text>
                <TextInput style={ styles.input } placeholder="Digite seu E-mail" />

                <Text style={ styles.title }>Data de Nascimento</Text>
                <TextInput style={ styles.input } placeholder="XX/XX/XXXX" />
                
                <TouchableOpacity style={ styles.button }
                onPress={ () => navigation.navigate('Home') }>
                    <Text style={ styles.buttonText }>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ styles.buttonRegister }
                onPress={ () => navigation.navigate('SignIn')}>
                    <Text style={ styles.registerText }>Já possui conta? Clique aqui para efetuar o Login!</Text>
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
            marginTop: 18,
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
            marginTop: 20,
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