import React from 'react'
import { Text,StyleSheet, TouchableOpacity } from 'react-native'
import { BG_COLOR, TEXT_COLOR } from '../utils/color'

const CustomSolidBtn =({title,onClick})=> {
  return (
    <TouchableOpacity style={styles.btn} onPress={()=>{
        onClick()
    }}>
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomSolidBtn

const styles = StyleSheet.create({
    btn:{
        width:'90%',
        height:45,
        backgroundColor:TEXT_COLOR,
        alignSelf:'center',
        marginTop:20,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        color:BG_COLOR,
        fontWeight:'500',
        fontSize:16,
    }
})