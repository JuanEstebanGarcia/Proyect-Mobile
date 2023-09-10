import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


//Funcion Principal
export const ConsultaHorasScreen = () => {
  //Funcion para obtener los registros y filtrarlos
  const route = useRoute();
  const registrosParam = route.params.registros;
  const [registros, setRegistros] = useState(registrosParam);

  const [initildate, setinitildate] = useState('');
  const [finaldate, setfinaldate] = useState('');
  const [registerFilter, setregisterFilter] = useState([]);

  useEffect(() => {
    const get = async () => {
      try {
        const registrosGuardados = await AsyncStorage.getItem('registros');
        if (registrosGuardados) {
          const registrosParseados = JSON.parse(registrosGuardados);
          setRegistros(registrosParseados);
        }
      } catch (error) {
        console.error('Error al obtener los registros:', error);
      }
    };

    get();
  }, []);

  //Se cargan los registros

  const cargarRegistros = () => {
    const registerFilter = registros.filter((registro) => {
      return registro.fecha >= initildate && registro.fecha <= finaldate;
    });
    const recordsDisplayed = registerFilter.slice(0, 10);
    setregisterFilter(recordsDisplayed);
  };

  //Funcion que retorna 

  return (
    <View style={styles.container}>
      <View style={styles.containersecond}>
        <Text style={styles.textinit1}>Consultar registros</Text>

      </View>

      <Text style={styles.label}>Fecha de inicio:</Text>
      <TextInput
        style={styles.input}
        placeholder="Fecha de inicio-YYYY-MM-DD"
        placeholderTextColor={'#8F8E8E'}
        value={initildate}
        onChangeText={text => setinitildate(text)}
      />

      <Text style={styles.label}>Fecha final:</Text>
      <TextInput
        style={styles.input}
        placeholder="Fecha de Final-YYYY-MM-DD"
        placeholderTextColor={'#8F8E8E'}
        value={finaldate}
        onChangeText={text => setfinaldate(text)}
      />

      <TouchableOpacity style={styles.button} onPress={cargarRegistros}>
        <Text style={styles.textButton}>Cargar Registros</Text>
      </TouchableOpacity>

      {/* Lista de registros */}
      <FlatList
        data={registerFilter}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.registroItem}>
            <Text style={styles.registroFecha}>{item.fecha}</Text>
            <Text style={styles.registroHoras}>{item.totalHoras}</Text>
          </View>
        )}
      />
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
    marginBottom: 10
  },
  textButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registroItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
  },
  registroFecha: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8F8E8E'
  },
  registroHoras: {
    fontSize: 14,
    color: '#8F8E8E'
  },
});
