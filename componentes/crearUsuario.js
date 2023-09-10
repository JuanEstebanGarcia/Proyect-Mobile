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
  ScrollView,
} from 'react-native';

//Funcion Principal 

export const RegistrarUsuarioScreen = ({ navigation }) => {

  //Funcion para validar campos y contraseña segun lo solicitado 
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleRegister = () => {
    if (!username || !email || !password || !birthdate) {
      setErrorMessage('Por favor, complete todos los campos.');
    } else if (!validatePassword(password)) {
      setErrorMessage(
        'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.'
      );
    } else {
      setErrorMessage('');
      navigation.navigate('Inicio'); // 
    }
  };

  //Funcion que retorna 
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.secondcontainer}>
          <Text style={styles.initialText}>Crea una cuenta nueva</Text>
        </View>

        <View style={styles.containertheeth}>
          <View style={styles.campo}>
            <Text style={styles.label}>Escribe tu nombre</Text>
            <TextInput
              style={styles.input}
              placeholder="Usuario"
              placeholderTextColor={'#8F8E8E'}
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Escribe tu correo electrónico</Text>
            <TextInput
              style={styles.input}
              placeholder="Ejemplo@gmail.com"
              placeholderTextColor={'#8F8E8E'}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Escribe una contraseña</Text>
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              placeholderTextColor={'#8F8E8E'}
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Escribe tu fecha de nacimiento</Text>
            <TextInput
              style={styles.input}
              placeholder="Fecha nacimiento-YYYY-MM-DD"
              placeholderTextColor={'#8F8E8E'}
              value={birthdate}
              onChangeText={(text) => setBirthdate(text)}
            />
          </View>
        </View>

        <View style={styles.containerfourth}>
          {errorMessage ? (
            <Text style={styles.errorText}>{errorMessage}</Text>
          ) : null}

          <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
            <Text style={styles.buttonText}>Crear cuenta</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => navigation.navigate('Inicio Sesion')}
          >
            <Text style={styles.buttonText}>Ya tengo cuenta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    fontFamily: 'Roboto mono',
  },
  secondcontainer: {
    width: 430,
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
    top: 50,
  },
  containertheeth: {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto mono',
    top: -20,
  },
  buttonText: {
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
    fontWeight: '600',
  },
  campo: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  input: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    width: 250,
    marginTop: 10,
    fontWeight: '400',
    borderColor: 'gray',
    borderWidth: 1,
    color: '#151515',
  },
  containerfourth: {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto mono',
    top: '',
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
    marginTop: 10,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
  },
});
