import React, {useState, useContext} from 'React';
import {StyleSheet, View, Dimensions} from 'react-native';
import {MaterialIcons, Feather, AntDesign} from '@expo/vector-icons'
import {THEME} from '../theme';
import { AppCard } from '../components/ui/AppCard';
import { EditModal } from '../components/EditModal';
import {AppText} from '../components/ui/AppText';
import {AppButton} from '../components/ui/AppButton'
import { TodoContext } from '../context/todo/todoContext';
import { ScreenContext } from '../context/screen/screenContext';

export const TodoScreen = () => {
    const {todos, updateTodo, removeTodo} = useContext(TodoContext);
    const {todoId, changeScreen} = useContext(ScreenContext)
    const [modal, setModal] = useState(false);

    const todo = todos.find(t => t.id === todoId)
    return (
    <View>
        <EditModal 
        visible={modal} 
        onCancel={()=> setModal(!modal)} 
        todo={todo}
        changeTodo = {updateTodo}/>
        <AppCard style ={styles.card}>
            <AppText style ={styles.title}>{todo.title}</AppText> 
            <AppButton color={THEME.MAIN_COLOR} onPress ={() => setModal(true)}>
                <Feather size={20} name={'edit'}/>
            </AppButton>
        </AppCard>
        <View style={styles.buttons}>
            <View style={styles.button}>
                <AppButton onPress={() => changeScreen(null)} color={THEME.MAIN_COLOR}>
                    <MaterialIcons name={'keyboard-backspace'} size={20}/>
                </AppButton>
            </View>
            <View style={styles.button}>
                <AppButton color={THEME.DANGER_COLOR} 
                onPress={()=> removeTodo(todo.id)}>
                    <AntDesign name={'delete'} size={20}/>
                </AppButton>
            </View>
              
        </View>
    </View>
    )}

const styles = StyleSheet.create({
    buttons: {
        flexDirection:'row',
        justifyContent:'space-between',
    },
    button:{
        width: Dimensions.get('window').width / 3
    },
    title:{
        fontSize: 16,
        width: '65%'
    },
    card :{
        marginBottom: 20,
        padding: 15
    }
})