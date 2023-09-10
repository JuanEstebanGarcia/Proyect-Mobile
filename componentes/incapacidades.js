import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';

//Funcion Principal 

export const IncapacidadScreen = () => {

  //Funcion para calcular dias de incapacidad 
  const [initialdate, setinitialdate] = useState('');
  const [exitDate, setexitDate] = useState('');
  const [diasIncapacidad, setDiasIncapacidad] = useState(0);
  const [Messege, setMessege] = useState('');
  const [mostrarMessege, setMostrarMessege] = useState(false);

  const isDateValid = (dateStr) => {
    // Expresión regular para verificar el formato "YYYY-MM-DD"
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(dateStr);
  };

  const calculateDisabilityDays = () => {
    // Verificar que se ingresaron fechas de inicio y fin
    if (!initialdate || !exitDate) {
      setMessege('Por favor, complete ambas fechas.');
      setMostrarMessege(true);
      return;
    }

    // Verificar si las fechas son válidas
    if (!isDateValid(initialdate) || !isDateValid(exitDate)) {
      setMessege('Por favor, ingrese fechas válidas en formato "YYYY-MM-DD".');
      setMostrarMessege(true);
      return;
    }

    // Parsear las fechas en objetos de JavaScript
    const initialdateObj = new Date(initialdate);
    const exitDateObj = new Date(exitDate);

    // Calcular la diferencia en milisegundos entre las fechas
    const differenceInMilliseconds = exitDateObj - initialdateObj;

    // Calcular la diferencia en días
    const calculateDays = Math.ceil(
      differenceInMilliseconds / (1000 * 60 * 60 * 24)
    );

    // Verificar que la fecha de inicio sea anterior a la fecha final
    if (calculateDays < 0) {
      setMessege('La fecha de inicio debe ser anterior a la fecha final.');
      setMostrarMessege(true);
    } else {
      // Actualizar el estado de 'diasIncapacidad' y mostrar el Messege
      setDiasIncapacidad(calculateDays);
      setMessege(
        `Su incapacidad fue registrada. Total de días de incapacidad: ${calculateDays} dias`
      );
      setMostrarMessege(true);
    }
  };

  //Funcion que retorna 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containersecond}>
        <Text style={styles.initialText} >Incapacidad</Text>

      </View>

      <View style={styles.containertheeth}>
        <View style={styles.campo}>
          <TextInput
            style={styles.input}
            placeholder="Fecha Inicio (YYYY-MM-DD)"
            placeholderTextColor={'#151515'}
            onChangeText={(text) => setinitialdate(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Fecha Final (YYYY-MM-DD)"
            placeholderTextColor={'#151515'}
            onChangeText={(text) => setexitDate(text)}
          />

          <TouchableOpacity
            style={styles.sendButton}
            onPress={calculateDisabilityDays}
          >
            <Text style={styles.textButton}>Enviar</Text>
          </TouchableOpacity>
          <Text style={styles.respText}>{Messege}</Text>
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



  textoboton: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
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
    marginTop: 5,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
  sendButton: {
    backgroundColor: '#ffc107',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 15,
    marginTop: 20,
  },
  textButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },

});
