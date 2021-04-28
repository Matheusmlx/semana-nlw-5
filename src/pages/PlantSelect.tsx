import React,{useState} from 'react'

import {View,Text,StyleSheet,FlatList} from 'react-native'
import { EnviromentButton } from '../components/EnviromentButton'
import { Header } from '../components/Header'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function PlantSelect() {

    const [activeButton,setActiveButton] = useState(false)

    function handleEnviromentButton(){
        setActiveButton(true)
    }


    return(
        <View style={styles.container}>
            <Header/>
            <View>
                <Text style={[styles.phrase,styles.heading]}>Em qual ambiente</Text>
                <Text style={[styles.phrase,styles.paragraph]}>você quer colocar sua planta?</Text>
            </View>
            
            
            <View>
                <FlatList 
                    data={['Cozinha','Quarto','Banheiro','Quarto','Copa','Lavadoura']}
                    renderItem = {({item}) => (
                        <EnviromentButton 
                            title={item}
                            active={activeButton} 
                            onPress={handleEnviromentButton}/>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.background
    },
    phrase:{
        paddingHorizontal:20,
        fontSize:20
    },
    heading:{
        color:colors.heading,
        fontFamily:fonts.heading
    },
    paragraph:{
        color:colors.heading   
    }

})