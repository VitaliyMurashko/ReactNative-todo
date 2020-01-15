import React from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';
import {INPUT, THEME} from '../theme';

export const EditModal = ({visible, onCancel, todo, changeTodo}) =>{
    return (
        <Modal
        animationType={'slide'} 
        visible={visible}>
            <View style={styles.wrap}>
                <TextInput style ={INPUT} value={todo.title} onChangeText={val => changeTodo(todo.id, val)}/>
                <View style={styles.buttons}>
                <Button title='back' onPress= {onCancel} color={THEME.MAIN_COLOR}/>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrap : {
        justifyContent:'center',
        alignItems: 'center',
        flex: 1
    },
    buttons: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
}) 