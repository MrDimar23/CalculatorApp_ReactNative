import {useState} from 'react';
import {SafeAreaView, StyleSheet, Switch, Text} from "react-native";
import { myColors } from './scr/styles/Colors';
import { ThemeContext } from './scr/context/ThemeContext';
import MyKeyboard from './scr/components/MyKeyboard';


export default function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
       <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: 'black'}]}>
       <Switch 
          value={theme === 'dark'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          ios_backgroundColor="black"
        />
        <MyKeyboard/>
       </SafeAreaView>
    </ThemeContext.Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
})