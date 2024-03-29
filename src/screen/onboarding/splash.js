import React from "react";
import { StatusBar } from "expo-status-bar";
import { View,Text,StyleSheet, Image} from "react-native";
import { TEXT_COLOR } from "../../utils/color";
function Splash() {
    return (
        <View style={styles.container}>
        <Image source={require('../../../assets/images/job.png')} style={styles.logo}/>
        <Text style={styles.name}>FindMyJob</Text>
        <Text style={styles.sologan}>post and find jobs in one place</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  export default Splash;
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
    name:{
      fontWeight:'600',
      fontSize:35,
      marginTop:10,
      color:TEXT_COLOR,
    },
    sologan:{
       fontSize:16,
       fontStyle:'italic',
       position:'absolute',
       bottom:50,
       textTransform:'capitalize',
       fontWeight:'600',
    },
  });