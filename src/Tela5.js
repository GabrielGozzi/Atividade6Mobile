import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Tela5 = ({}) => {
  const navigation = useNavigation();
  return (
    <View>
      <Image source={require('../assets/Telas/Tela5.png')} style={{ width: '100%', height: '100%', resizeMode:'contain', marginTop: -150}}/>
      <Button title="Avançar" onPress={() => navigation.navigate('Tela6')} />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
      <Button title="Principal" onPress={() => navigation.navigate('TelaPrincipal')} />
    </View>
  );
};
export default Tela5;