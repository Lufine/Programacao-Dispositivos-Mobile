import React from 'react';
import { View, Image, Text } from 'react-native';

// Componente que precisa mostrar a imagem
function AnotherComponent({ capturedImage }) {
  return (
    <View>
      {capturedImage && (
        <Image
          source={{ uri: capturedImage }}
          style={{
            width: 220,
            height: 220,
            borderRadius: 150,
            resizeMode: 'cover',
            transform: [{ scaleX: -1 }],
          }}
        />
      )}
    </View>
  );
}

export default AnotherComponent;