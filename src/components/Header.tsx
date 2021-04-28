import React from 'react'
import { Text,View,StyleSheet, Image } from 'react-native'

import userImg from '../assets/matheus.png' 
import colors from '../styles/colors'
import fonts from '../styles/fonts'


export function Header () {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.firstText}>Olá,</Text>
                <Text style={styles.secondText}>Matheus</Text>
            </View>

            <Image source={userImg} style={styles.image}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:20,
        flexDirection:'row',
        marginTop:50,
        paddingHorizontal:20
    },
    firstText:{
      fontSize:32,
      color:colors.heading,
      fontFamily: fonts.text
    },
    secondText:{
        fontSize:32,
        color:colors.heading,
        fontFamily:fonts.heading,
        lineHeight:40
    },
    image:{
        width:80,
        height:80,
        borderRadius:40,
        

    }
})