import React from 'react'
import {
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  Dimensions
} from 'react-native'

import watering from '../assets/watering.png'
import colors from '../styles/colors'
import { Entypo } from '@expo/vector-icons'
import fonts from '../styles/fonts'
import { useNavigation } from '@react-navigation/core'

export function Welcome() {
  const navigation = useNavigation()

  function handleStart() {
    navigation.navigate('UserIdentification')
  }

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.title}>
        Gerencie {'\n'}
        suas plantas de {'\n'}
        forma fácil
      </Text>

      <Image source={watering} style={style.image} resizeMode="contain" />

      <Text style={style.subTitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar
      </Text>

      <TouchableOpacity
        onPress={handleStart}
        style={style.button}
        activeOpacity={0.8}
      >
        <Text style={style.buttonText}>
          <Entypo name="chevron-thin-right" size={15} />
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: fonts.heading,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 40,
    lineHeight: 34
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text
  },

  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56
  },
  buttonText: {
    color: colors.white,
    fontSize: 24
  },
  image: {
    height: Dimensions.get('window').width * 0.7
  }
})
