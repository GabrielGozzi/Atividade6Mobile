import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button, Image } from 'react-native';

 const Tela3 = ({}) => {
  const navigation = useNavigation();
  return (
    <View>
      <Image source={require('../assets/Telas/Tela3.png')} style={{ width: '100%', height: '100%', resizeMode:'contain', marginTop: -150}} />
      <Button title="Avançar" onPress={() => navigation.navigate('Tela4')} />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
      <Button title="Principal" onPress={() => navigation.navigate('TelaPrincipal')} />
    </View>
  );
};
export default Tela3;
