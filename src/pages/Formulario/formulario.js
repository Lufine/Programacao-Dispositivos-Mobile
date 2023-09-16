import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native'

const App = () => {

    const navigation = useNavigation();

  const [modalidade, setModalidade] = useState('');
  const [jogo, setJogo] = useState('');
  const [campeonato, setCampeonato] = useState('');
  const [equipe, setEquipe] = useState('');
  const [integrantes, setIntegrantes] = useState('');
  const [mostrarFormulario, setMostrarFormulario] = useState(true);

  const modalidades = ['FPS', 'MOBA', 'Battle Royale'];

  const jogosPorModalidade = {
    FPS: ['CS:GO', 'Valorant'],
    MOBA: ['League of Legends', 'Dota 2'],
    'Battle Royale': ['PUBG', 'Fortnite'],
  };

  const campeonatosPorJogo = {
    'CS:GO': ['Campeonato 1', 'Campeonato 2'],
    Valorant: ['Campeonato A', 'Campeonato B'],
    'League of Legends': ['Torneio X', 'Torneio Y'],
    'Dota 2': ['Torneio Z'],
    PUBG: ['Competição Alpha', 'Competição Beta'],
    Fortnite: ['Torneio 123'],
  };

  const handleModalidadeChange = (value) => {
    setModalidade(value);
    setJogo('');
    setCampeonato('');
  };

  const handleEnviarInscricao = () => {
    if (!modalidade || !jogo || !campeonato || !equipe || !integrantes) {
      Alert.alert('Dados Incompletos', 'Por favor, preencha todos os campos.');
    } else {
      // Envie os dados do formulário para o servidor ou realize alguma ação aqui
      Alert.alert('Inscrição Realizada com Sucesso!', 'Obrigado por se inscrever no torneio.');
      // Reiniciar o formulário e voltar ao menu principal
      setModalidade('');
      setJogo('');
      setCampeonato('');
      setEquipe('');
      setIntegrantes('');
      setMostrarFormulario(true);
    }
  };

  return (
    <View style={styles.container}>

        <TouchableOpacity
            onPress={() => navigation.navigate("Inscricao")}>
        <Image source={require("../../assets/seta.png")} style={styles.voltar}/>
        </TouchableOpacity>

      <Text style={styles.title}>Formulário de Inscrição</Text>
      {mostrarFormulario ? (
        <View>
          <Text style={styles.subtitle}>Selecione a modalidade:</Text>
          {modalidades.map((modalidadeItem) => (
            <Button
              key={modalidadeItem}
              title={modalidadeItem}
              onPress={() => handleModalidadeChange(modalidadeItem)}
              color={modalidade === modalidadeItem ? 'blue' : 'gray'}
            />
          ))}
          {modalidade && (
            <View>
              <Text style={styles.subtitle}>Selecione o jogo:</Text>
              {jogosPorModalidade[modalidade].map((jogoItem) => (
                <Button
                  key={jogoItem}
                  title={jogoItem}
                  onPress={() => {
                    setJogo(jogoItem);
                    setCampeonato('');
                  }}
                  color={jogo === jogoItem ? 'blue' : 'gray'}
                />
              ))}
              {jogo && (
                <View >
                  <Text style={styles.subtitle}>Selecione o campeonato:</Text>
                  {campeonatosPorJogo[jogo].map((campeonatoItem) => (
                    <Button
                      key={campeonatoItem}
                      title={campeonatoItem}
                      onPress={() => setCampeonato(campeonatoItem)}
                      color={campeonato === campeonatoItem ? 'blue' : 'gray'}
                    />
                  ))}
                  <Text style={styles.text}>Nome da Equipe:</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Nome da Equipe"
                    onChangeText={(text) => setEquipe(text)}
                    value={equipe}
                  />
                  <Text style={styles.text}>Nomes dos Integrantes:</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Nomes dos Integrantes (separados por vírgula)"
                    onChangeText={(text) => setIntegrantes(text)}
                    value={integrantes}
                  />
                  <Button
                    title="Enviar Inscrição"
                    onPress={handleEnviarInscricao}
                  />
                </View>
              )}
            </View>
          )}
        </View>
      ) : (
        <View>
          <Text>Inscrição Realizada com Sucesso!</Text>
        </View>
      )}
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#00affa',
        marginBottom: 20,
        marginTop: -45,
        position: 'relative'
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 10,
        marginBottom: 10,
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 10,
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        color: '#fff',
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: '100%',
    },
});

export default App;
