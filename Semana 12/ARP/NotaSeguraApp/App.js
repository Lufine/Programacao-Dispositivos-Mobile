import React, { Component } from 'react';
import { Text, View, TextInput, Button, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';

export default class NotaSeguraApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      nota1: '',
      nota2: '',
      nota3: '',
      resultado: '',
    };
  }

  calcularResultado = () => {
    const { nota1, nota2, nota3 } = this.state;
    const mediaDesejada = 60;
    
    if (!nota1 || !nota2) {
      if (!nota1 && !nota2) {
        alert('Informe pelo menos duas notas.');
        return;
      }
      
      const nota1Number = parseFloat(nota1 || 0);
      const nota2Number = parseFloat(nota2 || 0);
      
      if (nota1Number < 0 || nota1Number > 100 || nota2Number < 0 || nota2Number > 100) {
        alert('As notas devem estar entre 0 e 100.');
        return;
      }

      const notaNecessaria = mediaDesejada * 3 - nota1Number - nota2Number;
      this.setState({
        resultado: `Faltam ${notaNecessaria.toFixed(2)} pontos na nota 3 para atingir a média.`,
      });
    } else if (nota1 && nota2 && !nota3) {
      const nota1Number = parseFloat(nota1);
      const nota2Number = parseFloat(nota2);
      
      if (nota1Number < 0 || nota1Number > 100 || nota2Number < 0 || nota2Number > 100) {
        alert('As notas devem estar entre 0 e 100.');
        return;
      }

      const notaNecessaria = mediaDesejada * 3 - nota1Number - nota2Number;
      this.setState({
        resultado: `Faltam ${notaNecessaria.toFixed(2)} pontos na nota 3 para atingir a média.`,
      });
    } else if (nota1 && nota2 && nota3) {
      const nota1Number = parseFloat(nota1);
      const nota2Number = parseFloat(nota2);
      const nota3Number = parseFloat(nota3);
      
      if (nota1Number < 0 || nota1Number > 100 || nota2Number < 0 || nota2Number > 100 || nota3Number < 0 || nota3Number > 100) {
        alert('As notas devem estar entre 0 e 100.');
        return;
      }

      const media = (nota1Number + nota2Number + nota3Number) / 3;
      const resultado = media >= mediaDesejada ? 'Aprovado' : 'Reprovado';
      this.setState({resultado: `Média final: ${media.toFixed(2)}. Resultado: ${resultado}`});
    }
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.title}>Cálculo de Notas</Text>
          <Text>Nome do Aluno</Text>
          <TextInput
            style={styles.input}
            onChangeText={nome => this.setState({ nome })}
            value={this.state.nome}
          />
          <Text>Nota 1</Text>
          <TextInput
            style={styles.input}
            onChangeText={nota1 => this.setState({ nota1 })}
            value={this.state.nota1}
            keyboardType="numeric"
          />
          <Text>Nota 2</Text>
          <TextInput
            style={styles.input}
            onChangeText={nota2 => this.setState({ nota2 })}
            value={this.state.nota2}
            keyboardType="numeric"
          />
          <Text>Nota 3</Text>
          <TextInput
            style={styles.input}
            onChangeText={nota3 => this.setState({ nota3 })}
            value={this.state.nota3}
            keyboardType="numeric"
          />
          <Button title="Calcular" onPress={this.calcularResultado} color="#007bff" />
          {this.state.resultado ? <Text style={styles.resultado}>{this.state.resultado}</Text> : null}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007bff',
    textAlign: 'center',
    marginVertical: 20,
  },
  input: {
    borderRadius: 8,
    borderWidth: 1,
    textAlign: 'justify',
    width: '100%',
    padding: 5,
    marginVertical: 10,
    backgroundColor: 'transparent',
  },
  resultado: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    backgroundColor: '#007bff',
  },
});