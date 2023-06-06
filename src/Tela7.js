import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Tela7 = ({}) => {
  const navigation = useNavigation();
  return (
    <View>
      <Image source={require('../assets/Telas/Tela7.png')} style={{ width: '100%', height: '100%', resizeMode:'contain', marginTop:-90}} />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
      <Button title="Principal" onPress={() => navigation.navigate('TelaPrincipal')} />
    </View>
  );
};
export default Tela7;