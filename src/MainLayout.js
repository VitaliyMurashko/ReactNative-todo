import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import Navbar from './components/NavBar';
import { THEME } from './theme';
import {MainScreen} from './screens/MainScreen.js';
import {TodoScreen} from './screens/TodoScreen.js'
import { ScreenContext } from './context/screen/screenContext';

export const MainLayout = () => {
    const {todoId} = useContext(ScreenContext)


    return (
        <View style ={styles.wrapper}>
       <Navbar />
       <View style={styles.container}>
        {todoId ? <TodoScreen /> : <MainScreen />}
       </View>
     </View>
    )
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: THEME.PADDING_HORIZONTAL,
      paddingVertical: 20,
      flex: 1
    },
    wrapper:{
      flex: 1
    }
  });