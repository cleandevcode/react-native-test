/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { View, Image } from 'react-native';
import reducer from './src/reducers';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './src/screens/vender/Onboard';
import Dashboard from  './src/screens/vender/Dashboard';
import History  from './src/screens/vender/History';
import Settings from './src/screens/vender/Settings';
import Scanpage from './src/screens/vender/Scanpage';
import Timetracker from './src/screens/vender/Timetracker';
import Description from './src/screens/vender/Description';
import Privacy from './src/screens/vender/Privacy';
import Contactus from './src/screens/vender/Contactus';


const Stack = createStackNavigator();
const middleware = [thunk];
const composeEnhancer = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancer(applyMiddleware(...middleware));
const store = createStore(reducer, {}, enhancer);

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: '#fff' } }} initialRouteName='Onboarding'>
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        <Stack.Screen name="History" component={History} options={{ headerShown: false }} />
        <Stack.Screen name="Description" component={Description} options={{ headerShown: false }} />
        <Stack.Screen name="Privacy" component={Privacy} options={{ headerShown: false }} />
        <Stack.Screen name="Contactus" component={Contactus} options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
        <Stack.Screen name="Scanpage" component={Scanpage} options={{ headerShown: false }} />
        <Stack.Screen name="Timetracker" component={Timetracker} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function App(){
  return(
    <Provider store={store}>
      <Navigator/>
    </Provider>
  )
}

export default App;
