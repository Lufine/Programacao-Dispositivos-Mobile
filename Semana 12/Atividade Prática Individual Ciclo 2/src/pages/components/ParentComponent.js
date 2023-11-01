import React from 'react';
import { View, Text } from 'react-native';
import AnotherComponent from './AnotherComponent'; // Importe o componente necessário

function ParentComponent({ capturedImage }) {
  return (
    <View>
      <Text>Componente Pai</Text>
      <AnotherComponent capturedImage={capturedImage} />
    </View>
  );
}

export default ParentComponent;
