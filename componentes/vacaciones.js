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
export const VacacionesScreen = () => {

  //Funcion para calcular dias de vacaciones
  const [identification, setidentification] = useState('');
  const [motive, setmotive] = useState('');
  const [durate, setdurate] = useState('');
  const [Mensagge, setm] = useState('');

  const calcularDiasVacaciones = () => {
    if (!identification || !motive || !durate) {
      setm('Por favor, complete todos los campos.');
      return;
    }

    const dias = parseInt(durate);

    if (isNaN(dias) || dias < 1 || dias > 15) {
      setm('La duración de las vacaciones debe ser entre 1 y 15 días.');
    } else {
      setm(`Vacaciones programadas: ${durate} días. motive: ${motive}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containersecond}>
        <Text style={styles.initialText} >Vacaciones</Text>

      </View>

      <View style={styles.containertheeth}>

        <View style={styles.campo}>
          <TextInput
            style={styles.input}
            placeholder='Número de identificación'
            placeholderTextColor={'#151515'}
            onChangeText={(text) => setidentification(text)}
          />

          <TextInput
            style={styles.input}
            placeholder='Motivo de sus vacaciones'
            placeholderTextColor={'#151515'}
            onChangeText={(text) => setmotive(text)}
          />

          <TextInput
            style={styles.input}
            placeholder='Duración en días'
            placeholderTextColor={'#151515'}
            onChangeText={(text) => setdurate(text)}
          />

          <TouchableOpacity style={styles.calculateButton} onPress={calcularDiasVacaciones}>
            <Text style={styles.textButton}>Calcular</Text>
          </TouchableOpacity>

          <Text style={styles.respText}>{Mensagge}</Text>
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
  calculateButton: {
    backgroundColor: '#ffc107',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 15,
    marginTop: 5
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
  },
  subtextoInicio: {
    marginTop: 0,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  }
});
