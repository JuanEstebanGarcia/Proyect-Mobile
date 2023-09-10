import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  View
} from 'react-native';

//Funcion Principal

export const NovedadesScreen = ({ navigation }) => {

  //Funcion que retorna

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containersecond}>
        <Text style={styles.initialText} >Novedades</Text>

      </View>
      <View style={styles.campo}>

        <View style={styles.containertheeth}>
          <TouchableOpacity style={styles.inabilityButton} onPress={() => navigation.navigate('Incapacidad')}>
            <Text style={styles.textButton}>Registrar una incapacidad</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.licenseButton} onPress={() => navigation.navigate('Licencias')}>
            <Text style={styles.textButton}> Solicitar una licencia</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.vacationButton} onPress={() => navigation.navigate('Vacaciones')}>
            <Text style={styles.textButton}>Pedir unas vacaciones</Text>
          </TouchableOpacity>

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

  textButton: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  textresult:
  {
    marginTop: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  containertheeth: {

    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto mono',
    top: -120

  },
  inabilityButton:
  {
    backgroundColor: '#0d6efd',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 15,
    marginTop: 20,
  },
  licenseButton:
  {
    backgroundColor: '#0d6efd',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 15,
    marginTop: 20,
  },
  vacationButton:
  {
    backgroundColor: '#0d6efd',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 15,
    marginTop: 20,
  },

});
