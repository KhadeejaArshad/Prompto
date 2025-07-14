import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Getstarted from './src/screens/Getstarted';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from './src/screens/Dashboard';
import AddTask from './src/screens/AddTask';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { useNotificationHandler } from './src/utils/ActionsNotification/ActionNotification';
import { SafeAreaView } from 'react-native-safe-area-context';
import Registration from './src/screens/Registration';
import Login from './src/screens/Login';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const AuthStack=()=>{
  return(
      <Stack.Navigator>
           <Stack.Screen
          name="GetStarted"
          component={Getstarted}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Registration"
          component={Registration}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>

  )
}
const AuthenticatedStack=()=>{
  return(
    <Stack.Navigator>
          <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddTask"
          component={AddTask}
          options={{ headerShown: false }}
        />

    </Stack.Navigator>
  )
}


const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
// function RootNavigator() {
//   const loggedIn = useSelector(state => !!state.auth.token);
//   return loggedIn ? <AuthenticatedStack /> : <AuthStack />;
// }

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  useNotificationHandler();

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Stack.Navigator initialRouteName="GetStarted">
        <Stack.Screen
          name="GetStarted"
          component={Getstarted}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddTask"
          component={AddTask}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default AppWrapper;
