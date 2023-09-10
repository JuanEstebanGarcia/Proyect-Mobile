import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Funcion Principal
export const RegistrarHorasScreen = () => {

  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState('');
  const [horaInicio, setHoraInicio] = useState('08:00');
  const [horaSalida, setHoraSalida] = useState('');
  const [amPm, setAmPm] = useState('AM');
  const [totalHoras, setTotalHoras] = useState('');
  const [registros, setRegistros] = useState([]);

  const storeRecord = async (registro) => {
    try {
      const saveRecords = await AsyncStorage.getItem('registros');
      let newsRecords = [];

      if (saveRecords) {
        newsRecords = JSON.parse(saveRecords);
      }

      newsRecords.push(registro);
      await AsyncStorage.setItem('registros', JSON.stringify(newsRecords));
    } catch (error) {
      console.error('Error al almacenar el registro:', error);
    }
  };

  const calculateTotalHours = () => {
    const initialHourArray = horaInicio.split('8:00');
    const exitHourArray = horaSalida.split(':');
    const horaInicioInt = parseInt(initialHourArray[0], 10);
    const minInicioInt = parseInt(initialHourArray[1], 10);
    const horaSalidaInt = parseInt(exitHourArray[0], 10);
    const minSalidaInt = parseInt(exitHourArray[1], 10);

    const initialMinutes = horaInicioInt * 60 + minInicioInt;
    const exitMinutes = horaSalidaInt * 60 + minSalidaInt;
    const minutesDifference = exitMinutes - initialMinutes;

    const HoursWorked = Math.floor(minutesDifference / 60);
    const minutosRestantes = minutesDifference % 60;

    const totalHoursWorked = `${HoursWorked} horas ${minutosRestantes} minutos`;
    setTotalHoras(totalHoursWorked);

    const nuevoRegistro = {
      fecha: selectedDate,
      horaInicio: horaInicio,
      amPm: amPm,
      horaSalida: horaSalida,
      totalHoras: totalHoursWorked,
    };

    setRegistros([...registros, nuevoRegistro]);
    storeRecord(nuevoRegistro);

    navigation.navigate('Consultar Hora', { registros: [...registros, nuevoRegistro] });
  };

  return (
    <View style={styles.container}>
      <View style={styles.containersecond}>
        <Text style={styles.textinit1}>Registrar Hora</Text>
      </View>

      <Text style={styles.label}>Fecha:</Text>
      <TextInput
        style={styles.input}
        placeholder="Seleccionar fecha: YYYY-MM-DD"
        placeholderTextColor={'#8F8E8E'}
        value={selectedDate}
        onChangeText={(text) => setSelectedDate(text)}
      />

      <Text style={styles.label}>Hora de inicio:</Text>
      <TextInput
        style={styles.input}
        value={horaInicio}
        editable={false}
      />

      <Text style={styles.label}>AM/PM:</Text>
      <TextInput
        style={styles.input}
        placeholder="AM o PM"
        placeholderTextColor={'#8F8E8E'}
        value={amPm}
        onChangeText={(text) => setAmPm(text)}
      />

      <Text style={styles.label}>Hora de salida:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese hora de salida"
        placeholderTextColor={'#8F8E8E'}
        value={horaSalida}
        onChangeText={(text) => setHoraSalida(text)}
      />

      <TouchableOpacity style={styles.button} onPress={calculateTotalHours}>
        <Text style={styles.textButton}>Registrar Horas</Text>
      </TouchableOpacity>
    </View>
  );
};

//Estilos

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto mono',
    top: -70
  },
  containersecond:
  {
    width: '100%',
    top: -30,
    height: 230,
    alignItems: 'center',
    justifyContent: 'center',

  },

  textinit1: {
    fontSize: 30,
    marginBottom: 5,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    top: 100
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
    marginBottom: 20

  },
  button: {
    backgroundColor: '#0d6efd',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 15,
    marginTop: 10,
  },
  textButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalHours: {
    fontSize: 16,
  },
});
