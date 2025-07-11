import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import Getstarted from './src/screens/Getstarted';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  // let name:string='Khadeeja'
  // let age:number=22
  // function greet(name:string):string{
  //   return `Hello${name}`


  // }
  // enum Colors{
  //   Red='red',
  //   Blue='blue',
  //   Green='green'
  // }
  // let c:Colors=Colors.Green
  // type Person={
  //   name:string,
  //   age:number
  // }
  // let p1: Person = { name: "Adeel", age: 30 };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <Text>Hello!{name}</Text>
      <Text>{age}</Text>
      <Text>{greet(name)}</Text>
      <Text>{c}</Text>
      <Text>{p1.age}</Text> */}

      <Getstarted/>

      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
});

export default App;
