import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

//Funcion Principal

export const homeScreen = ({ navigation }) => {


  //Funcion que retorna 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containersecond}>
        <Text style={styles.initialText} >Operaciones disponibles </Text>

      </View>
      <View style={styles.containertheeth}>
        <TouchableOpacity style={styles.registerHours} onPress={() => navigation.navigate('Registrar Hora')}>
          <Text style={styles.textButton}>Registrar hora y consultar registros </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerNews} onPress={() => navigation.navigate('Novedades')}>
          <Text style={styles.textButton}>Realizar Novedad</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.exitButton} onPress={() => navigation.navigate('Pagina Principal')}>
          <Text style={styles.textButton}>Salir</Text>
        </TouchableOpacity>
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
    marginTop: -100
  },
  containersecond:
  {

    width: '100%',
    top: 80,
    height: 210,
    alignItems: 'center',
    justifyContent: 'center',


  },

  initialText: {
    fontSize: 30,
    marginBottom: 5,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    top: -80
  },

  containertheeth: {

    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto mono',
    top: -80

  },

  exitButton: {
    backgroundColor: '#dc3545',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 15,
    marginTop: 20,
  },
  registerHours: {
    backgroundColor: '#0d6efd',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 15,
    marginTop: 10,
  },
  registerNews:
  {
    backgroundColor: '#ffc107',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 15,
    marginTop: 10,
  },
  textButton: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

