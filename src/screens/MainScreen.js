import React, {useState, useContext, useEffect, useCallback} from 'React';
import {StyleSheet, View, FlatList, Image, Dimensions} from 'react-native';
import {AddTodo} from '../components/Addtodo';
import {Todo} from '../components/Todo'
import { THEME } from '../theme';
import { TodoContext } from '../context/todo/todoContext';
import { ScreenContext } from '../context/screen/screenContext';
import { AppLoader } from '../components/ui/AppLoader';
import { AppText } from '../components/ui/AppText';
import { AppButton } from '../components/ui/AppButton';

export const MainScreen = () => {
    const {addTodo, todos, removeTodo, fetchTodos, loading, error} = useContext(TodoContext);
    const {changeScreen} = useContext(ScreenContext)
    const [deviceWidth, setDeviceWigth] = useState(Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2);
    
    const loadTodos = useCallback(async () => await fetchTodos(), [fetchTodos])

    useEffect(()=>{
        loadTodos()
    }, [])

    useEffect(()=>{
        const update = () => {
            const width = Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2;
            setDeviceWigth(width)
        }
        Dimensions.addEventListener('change', update );

        return () => {
            Dimensions.removeEventListener('change', update );  
        }
    });

    if(loading) {
        return <AppLoader/>
    }
    if(error){
       return <View style={styles.center}>
            <AppText style={styles.error}>{error}</AppText>
            <AppButton onPress={loadTodos}>Повторить</AppButton>
        </View>
    }
    let content =  (
    <View style={{deviceWidth}}>
        <FlatList
             keyExtractor = {item => item.id.toString()}
             data={todos}
             renderItem={({item}) => (<Todo todo={item} onRemove={removeTodo} onOpen={changeScreen}/>)}
        />
    </View>
    )

    if (todos.length === 0) {
        content = (<View style={styles.imgWrap}>
            <Image
             style={styles.img}
             source={require('../../assets/no_products_found.png')} 
            />
        </View>)
    }

    return (
    <View>
        <AddTodo onSubmit = {addTodo}/>
        {content}
    </View>
    )}

const styles = StyleSheet.create({
    imgWrap:{
        alignItems:'center',
        justifyContent:'center',
        padding: 10,
        height:'80%'
    },
    img:{
        resizeMode: 'contain',
        width:'100%',
        height:'100%'
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    error: {
        fontSize:20,
        color:THEME.DANGER_COLOR
    }
})