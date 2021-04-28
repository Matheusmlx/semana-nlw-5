import React from 'react'
import { SafeAreaView, StyleSheet, Platform, View, Text, TouchableOpacity } from 'react-native'

import {MaterialIcons} from '@expo/vector-icons'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

import { Button } from '../components/Button'
import { useNavigation } from '@react-navigation/core'
export function Confirmation() {

  const navigation = useNavigation()

  function handleBegin(){
      navigation.navigate('PlantSelect')
  }

  return(
    <SafeAreaView style={styles.container}>
        <View style={styles.content}>
            <Text>
                <MaterialIcons name="face" size={50} color={colors.green}/>
            </Text>
            <Text style={styles.title}>Prontinho</Text>
            <Text style={styles.subTitle}>Agora vamos começar a cuidar das suas plantinhas com muito cuidado.</Text>
            <Button text='Começar' onPress={handleBegin}/>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
  content:{
    flex:1,
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal:54
  },
  title:{
    marginTop:20,
    fontSize:24,
    lineHeight:32,
    textAlign:'center',
    color:colors.heading,
    fontFamily:fonts.heading,
    marginBottom:15
  },
  subTitle:{
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text
  }
})

export default Confirmation