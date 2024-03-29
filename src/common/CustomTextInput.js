import React from 'react'
import { Text, View,StyleSheet, TextInput } from 'react-native'
import { BG_COLOR } from '../utils/color'

const CustomTextInput=({title,placeholder,value, onChangeText,bad}) => {
  return (
    <View style={[styles.input,{borderColor:bad?'red':'#9e9e9e'}]}>
        <Text style={styles.title}>{title}</Text>
        <TextInput value={value} onChangeText={txt =>onChangeText(txt)} placeholder={placeholder}/>
    </View>
  )
}

export default CustomTextInput

const styles=StyleSheet.create({
    input:{
        width:'90%',
        height:45,
        borderWidth:0.4,
        alignSelf:'center',
        borderRadius:10,
        marginTop:20,
        justifyContent:'center',
        paddingLeft:15,
        paddingRight:15,
    },
    title:{
        alignSelf:'flex-start',
        marginLeft:20,
        position:'absolute',
        top:-12,
        backgroundColor:BG_COLOR,
        paddingLeft:10,
        paddingRight:10,   
    },
})
