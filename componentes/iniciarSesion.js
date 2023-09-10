import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  View,
  Button
} from 'react-native';

//Funcion principal

export const iniciarSesionScreen = ({ navigation }) => {

  //Funcion para restringuir el inicio a la pagina de operaciones

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const userControl = () => {
    if (username === 'Tdea' && password === '1234Tda_') {
      setErrorMessage('');
      navigation.navigate('Inicio')
    } else {
      setErrorMessage('Usuario o contraseña incorrectos');
    }
  };

  //Funcion que retorna 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containersecond}>
        <Text style={styles.textinit1}>Iniciar sesión</Text>

      </View>

      <View style={styles.containertheeth}>
        <View style={styles.campo}>
          <Text style={styles.label}>Escribe tu nombre</Text>
          <TextInput
            style={styles.input}
            placeholder="Usuario"
            value={username}
            onChangeText={text => setUsername(text)}
            placeholderTextColor={'#8F8E8E'}

          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Escribe tu contraseña</Text>
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            value={password}
            secureTextEntry={!showPassword}
            onChangeText={text => setPassword(text)}
            placeholderTextColor={'#8F8E8E'}

          />
          <View style={styles.showButton}>
            <Button
              title={showPassword ? 'Ocultar' : 'Mostrar'}
              onPress={() => setShowPassword(!showPassword)}
            />
          </View>

        </View>
      </View>

      <View style={styles.containerfourth}>
        <TouchableOpacity style={styles.loginButton} onPress={userControl}>
          <Text style={styles.textButton}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate('Registro Usuario')}
        >
          <Text style={styles.textButton}>Crear cuenta</Text>
        </TouchableOpacity>


      </View>
    </SafeAreaView>
  )
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
    top: -135,
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
    top: 80
  },
  containertheeth: {

    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto mono',
    top: -120

  },
  textButton: {
    color: 'white',
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
  campo: {
    marginTop: 10,
    marginHorizontal: 30
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
    color: '#151515'

  },
  containerfourth: {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto mono',
    top: -80
  },
  loginButton: {
    backgroundColor: '#0d6efd',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 15,
    marginTop: 10,
  },
  registerButton: {
    backgroundColor: '#ffc107',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 15,
    marginTop: 15,

  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  showButton:
  {
    backgroundColor: '#0d6efd',
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    fontWeight: 'bold'

  },
});

