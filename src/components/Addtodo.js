import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Keyboard} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { THEME } from '../theme';

export const AddTodo = ({onSubmit}) => {

    const [value, setValue] = useState('');

    const pressHandler = () => {
        if(!value.length == 0){
            onSubmit(value);
            setValue('')
            Keyboard.dismiss()  
        }
    }
    
    return(
        <View style ={styles.wrapper}>
            <TextInput 
            style={styles.input} 
            placeholder='write a task' 
            onChangeText = {text => setValue(text)} value={value}
            />
            <AntDesign.Button 
            onPress={pressHandler} 
            name={'plus'} 
            size={25} 
            backgroundColor={THEME.MAIN_COLOR}
            borderRadius={50}
            iconStyle={{marginRight: 0}} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'space-between'
    },
    input: {
        width:'80%',
        borderBottomColor:'#f0f0f0',
        borderBottomWidth:1,
        
    },
    button: {
        borderRadius: 50,
        backgroundColor: THEME.MAIN_COLOR,
        width:'100%'



    }
   
})

