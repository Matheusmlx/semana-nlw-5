import React from 'react';
import {StyleSheet,TouchableOpacity,Text,TouchableOpacityProps} from 'react-native';
import colors from '../styles/colors'
import fonts from '../styles/fonts'

interface ButtonText extends TouchableOpacityProps{
    text:string
}

export function Button({text,...rest}:ButtonText) {
    return(
        <TouchableOpacity style={styles.button} activeOpacity={0.8} {...rest}>
            <Text style={styles.buttonText}>{}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:colors.green,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:16,
        marginTop:30,
        height:56,
        width:'100%'
    },
    buttonText:{
        color:colors.white,
        fontSize:18,
        fontFamily:fonts.heading
    },
})