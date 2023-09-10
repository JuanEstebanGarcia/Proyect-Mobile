import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity
} from 'react-native';

//Funcion principal

export const InicioScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.initialtext}>Bienvenidos</Text>

      <View>
        <Image source={require('../img/icono.png')} style={styles.icon} />
      </View>
      <TouchableOpacity style={styles.buttonContinue} onPress={() => navigation.navigate('Inicio Sesion')}>
        <Text style={styles.textbutton}>Continuar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

//Estilos

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -100,
    fontFamily: 'Roboto mono'
  },
  icon: {
    width: 200,
    height: 200,
    marginBottom: 5,
  },
  buttonContinue: {
    backgroundColor: '#0d6efd',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 15,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'black'

  },
  textbutton: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  initialtext:
  {
    color: 'black',
    fontSize: 30,
    margin: 10,
    fontWeight: 'bold',
  }
});


