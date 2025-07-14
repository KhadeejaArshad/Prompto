import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import Getstarted from './src/screens/Getstarted';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from './src/screens/Dashboard';
import AddTask from './src/screens/AddTask';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { useNotificationHandler } from './src/utils/ActionsNotification/ActionNotification';

const Stack=createNativeStackNavigator();


const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

function App() {
  const isDarkMode = useColorScheme() === 'light';

  useNotificationHandler();

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Stack.Navigator initialRouteName="GetStarted">
        <Stack.Screen name="GetStarted" component={Getstarted} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        <Stack.Screen name="AddTask" component={AddTask} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




const styles = StyleSheet.create({
});

export default AppWrapper;
