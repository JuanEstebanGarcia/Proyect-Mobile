import * as React from 'react';
import { View, Text } from 'react-native';
import {InicioScreen } from '../componentes/home';
import { iniciarSesionScreen } from '../componentes/iniciarSesion';
import { RegistrarUsuarioScreen } from '../componentes/crearUsuario';
import { homeScreen } from '../componentes/inicio';
import { RegistrarHorasScreen } from '../componentes/registrarHora';
import { ConsultaHorasScreen } from '../componentes/consultarRegistros';
import { NovedadesScreen } from '../componentes/novedades';
import { LicenciaScreen } from '../componentes/licencias';
import { IncapacidadScreen } from '../componentes/incapacidades';
import { VacacionesScreen } from '../componentes/vacaciones';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export const navigation =()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Pagina Principal'>
        <Stack.Screen name="Pagina Principal" component={InicioScreen} />
        <Stack.Screen name="Inicio Sesion" component={iniciarSesionScreen} />
        <Stack.Screen name="Registro Usuario" component={RegistrarUsuarioScreen} />
        <Stack.Screen name="Inicio" component={homeScreen} />
        <Stack.Screen name="Registrar Hora" component={RegistrarHorasScreen} />
        <Stack.Screen name="Consultar Hora" component={ConsultaHorasScreen} />
        <Stack.Screen name="Novedades" component={NovedadesScreen} />
        <Stack.Screen name="Licencias" component={LicenciaScreen} />
        <Stack.Screen name="Incapacidad" component={IncapacidadScreen} />
        <Stack.Screen name="Vacaciones" component={VacacionesScreen} />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

