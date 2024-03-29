import React from 'react'
import { Text,StyleSheet, TouchableOpacity } from 'react-native'
import { BG_COLOR, TEXT_COLOR } from '../utils/color'

const CustomBorderBtn =({title,onClick})=> {
  return (
    <TouchableOpacity style={styles.btn} onPress={()=>{
        onClick()
    }}>
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomBorderBtn

const styles = StyleSheet.create({
    btn:{
        width:'90%',
        height:45,
        borderColor:TEXT_COLOR,
        borderWidth:1,
        alignSelf:'center',
        marginTop:20,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        color:TEXT_COLOR,
        fontWeight:'500',
        fontSize:16,
    }
})