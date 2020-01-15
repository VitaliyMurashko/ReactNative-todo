import React from 'react';
import {StyleSheet, View, TouchableOpacity,TouchableNativeFeedback, Platform} from 'react-native';
import {AppText} from './AppText';
import { THEME } from '../../theme';

export const AppButton = ({children, onPress, color=THEME.MAIN_COLOR}) => {
    const Wrapper = Platform.OS ==='android' ? TouchableNativeFeedback : TouchableOpacity;

    return (
        <Wrapper onPress={onPress} activeOpacity={0.7}>
            <View style={{...styles.default, backgroundColor: color}}> 
                <AppText style={styles.text}>{children}</AppText>
            </View>
       </Wrapper>)
}

const styles = StyleSheet.create({
    default: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color:'#fff'
    }
})