import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View
} from 'react-native';

//Funcion Principal 
export const LicenciaScreen = () => {
  //Funcion para calcular las hours de licencias permitidas 
  const [name, setname] = useState('');
  const [hoursLicense, sethoursLicense] = useState('');
  const [mensaje, setMensaje] = useState('');

  const calculateLicenseDays = () => {
    if (!name || !hoursLicense) {
      setMensaje('Por favor, complete todos los campos.');
      return;
    }

    const hours = parseFloat(hoursLicense);

    if (isNaN(hours)) {
      setMensaje('Por favor, ingrese un número válido de hours.');
    } else {
      if (hours <= 8) {
        setMensaje(`Sr. ${name} usted tiene ${hours} hours de licencia.`);
      } else {
        setMensaje(` Sr. ${name} Las hours de licencia no pueden ser mayores a 8. Se consideran vacaciones.`);
      }
    }
  };

  //Funcion que retorna
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containersecond}>
        <Text style={styles.initialText} >Licencia</Text>

      </View>

      <View style={styles.containertheeth}>
        <View style={styles.campo}>
          <TextInput
            style={styles.input}
            placeholder='Nombre y apellidos'
            placeholderTextColor={'#151515'}
            onChangeText={(text) => setname(text)}
          />

          <TextInput
            style={styles.input}
            placeholder='Horas de licencia'
            placeholderTextColor={'#151515'}
            onChangeText={(text) => sethoursLicense(text)}
          />

          <TouchableOpacity style={styles.registerButton} onPress={calculateLicenseDays}>
            <Text style={styles.textButton}>Calcular</Text>
          </TouchableOpacity>

          <Text style={styles.respText}>{mensaje}</Text>
        </View>
      </View>
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
  containersecond:
  {
    width: '100%',
    top: -30,
    height: 230,
    alignItems: 'center',
    justifyContent: 'center',

  },

  initialText: {
    fontSize: 30,
    marginBottom: 5,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    top: 5
  },

  containertheeth: {

    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto mono',
    top: -120

  },
  registerButton: {
    backgroundColor: '#ffc107',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 15,
    marginTop: 20
  },
  textButton: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  label: {
    color: '#151515',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 15,
    fontWeight: '600'
  },

  input:
  {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    width: 250,
    marginTop: 10,
    fontWeight: '400',
    borderColor: 'gray',
    borderWidth: 1,
    color: '#151515',
    marginBottom: 20,
    alignItems: 'center'

  },
  respText: {
    marginTop: 20,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center'
  }
});
