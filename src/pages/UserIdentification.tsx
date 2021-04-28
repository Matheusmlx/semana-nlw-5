import React,{useState} from 'react';
import {StyleSheet,SafeAreaView,Platform,View,Text,TextInput, TouchableOpacity} from 'react-native'
import colors from '../styles/colors'
import fonts from '../styles/fonts'
import { useNavigation } from '@react-navigation/core'
import {MaterialIcons} from '@expo/vector-icons'
import { Button } from '../components/Button';

export function UserIdentification () {

    const [isFocused,setIsFocused] = useState(false);
    const [isFilled,setIsFilled] = useState(false);
    const [prenchido,setIsPreenchido] = useState(false);
    const [name,setName] = useState<string>();

    const navigation = useNavigation()

    function handleBegin() {
        if(isFilled){
           navigation.navigate('Confirmation')
        }else{
            setIsPreenchido(true)
            setTimeout(()=>{
                setIsPreenchido(false)
            },1000)
        }
    }

    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!name);
    }
    function handleInputFocus() {
        setIsFocused(true)
    }
    function handleInputChange(value:string) {
        setIsFilled(!!value)
        setName(value)
    }

    return (
        <SafeAreaView style={styles.container}>
           <View style={styles.content}>
            <View style={styles.form}>
                <Text>
                   {isFilled ? <MaterialIcons name="face" size={50} color={colors.green}/> : <MaterialIcons name="face" size={50} color={colors.gray}/>}
                </Text>
                <Text style={styles.title}>
                    Como podemos {'\n'} chamar você?
                </Text>
                <TextInput 
                    style={[
                        styles.input, (isFocused || isFilled) && {borderColor:colors.green}
                    ]}
                    placeholder="Matheus"
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                    onChangeText={handleInputChange}
                    />
                {
                    prenchido ? 
                    <Text style={styles.mensagemErro}>
                        Nenhum valor Inserido
                    </Text>
                    :
                    <Text></Text>
                }
                <Button text='Confirmar' onPress={handleBegin}/>
            </View>
           </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        justifyContent:'space-around'
        ,alignItems:'center',
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    content:{
        flex:1,
        width:'100%'
    },
    form:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal:54,
        alignItems:'center'
    },
    input:{
        borderBottomWidth:1,
        borderColor:colors.gray,
        color:colors.heading,
        width:'100%',
        fontSize:18,
        marginTop:50,
        padding:10,
        textAlign:'center'
    },
    mensagemErro:{
        marginTop:15,
        color:colors.red
    },
    title:{
        marginTop:20,
        fontSize:24,
        lineHeight:32,
        textAlign:'center',
        color:colors.heading,
        fontFamily:fonts.heading
    },
})