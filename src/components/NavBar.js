import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {THEME} from '../theme';
import {AppText} from '../components/ui/AppText'

const Navbar = () => {
    return (
        <View style={{...styles.navbar, ...Platform.select({
            ios: styles.navBarIOS,
            android: styles.navbarAndroid
        })}}>
            <AppText style={styles.text}>Todo app</AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height:80,
        
        alignItems:'center',
        justifyContent: 'flex-end',
        

    },
    navbarAndroid: {
        backgroundColor:THEME.MAIN_COLOR,
    },
    navBarIOS:{
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 1
    },
    text: {
        color: Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#fff',
        fontSize: 20,
        margin: 15
    }

})

export default Navbar