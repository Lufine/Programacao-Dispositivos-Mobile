import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, StatusBar, Platform } from 'react-native';

import { useNavigation } from '@react-navigation/native'    

export default function Profile() {
    const navigation = useNavigation();

    return (
        <View style= { styles.container }>

        <StatusBar barStyle="light-content" backgroundColor='#00affa'/>

        <TouchableOpacity
            onPress={() => navigation.navigate("Home")}>
        <Image source={require("../../assets/seta.png")} style={styles.voltar}/>
        </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("ChangePhoto")}>
                <Image
                    source={require("../../assets/user.png")} style={styles.img}/>
            </TouchableOpacity>
                <Text style={styles.title}>Mudar Foto</Text>
                <Text style={styles.text}>User Name</Text>
                <Text style={styles.text}>Email</Text>
                <Text style={styles.text}>Data de nascimento: xx/xx/xxxx</Text>
                <Button title="Localização" onPress={ () => navigation.navigate('Localizacao') } />

                <TouchableOpacity
                    onPress={() => navigation.navigate("SignIn")}>
                <Text style={styles.sair}>Sair</Text>
                </TouchableOpacity>


        </View>
    );
};

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
        marginTop: 30,
        marginBottom: 10,
    },
    img: {
        marginTop: 10,
    },
    title:{
        color: "#fff",
        fontWeight: "bold",
        fontSize: 28,
        marginTop: 20,
        marginBottom: 20,
    },
    text:{
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
    sair:{
        color: "#000",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 30,
        fontSize: 28,
        backgroundColor: "#f90b1c",
        borderRadius: 10,
        width: 120,
    }
});