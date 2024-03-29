import React from 'react'
import { Text, View,StyleSheet, TouchableOpacity, Image } from 'react-native'
import { BG_COLOR, TEXT_COLOR } from '../../utils/color'
import { useNavigation } from '@react-navigation/native'

export default function SelectUser() {
  const navigation =useNavigation()
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/job.png')} style={styles.logo}/>
    <Text style={styles.title}>what are you looking for? </Text>
    <TouchableOpacity style={styles.wantToHire} 
    onPress={()=>{
      navigation.navigate('JobPostingNavigator')
    }}>
      
       <Text style={styles.btnTxt1}> Want to Hire Candidate</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.wantJob}>
       <Text style={styles.btnTxt2}> Want to Get Job</Text>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
      width:100,
      height:100,
    },
    title:{
        fontSize:20,
        fontWeight:'600',
    },
    wantToHire:{
        width:'90%',
        height:45,
        backgroundColor:TEXT_COLOR,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
    },
    btnTxt1:{
        color:BG_COLOR,
        fontSize:18,
        fontWeight:'500',

    },
    wantJob:{
        width:'90%',
        height:45,
        borderColor:TEXT_COLOR,
        borderWidth:1,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
    },
    btnTxt2:{
        color:TEXT_COLOR,
        fontSize:18,
        fontWeight:'500',

    }
})
