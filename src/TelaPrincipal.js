import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TelaPrincipal = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Image source={require('../assets/Telas/TelaPrincipal.png')} style={{ width: '100%', height: '100%', resizeMode:'contain', marginTop: -280}} />
      <Button title="Top" onPress={() => navigation.navigate('Tela1')} />
      <Button title="Mid" onPress={() => navigation.navigate('Tela2')} />
      <Button title="Adc" onPress={() => navigation.navigate('Tela3')} />
      <Button title="Suporte" onPress={() => navigation.navigate('Tela4')} />
      <Button title="Jungler" onPress={() => navigation.navigate('Tela5')} />
      <Button title="Urf" onPress={() => navigation.navigate('Tela6')} />
      <Button title="Tier List" onPress={() => navigation.navigate('Tela7')} />
    </View>
  );
};
export default TelaPrincipal;
