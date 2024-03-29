
import React, { useEffect } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import JobPostingNavigator from '../navigation/JobPostingNavigator'
import JobSearchNavigator from '../navigation/JobSearchNavigator'
import SelectUser from '../screen/onboarding/SelectUser'
import Splash from '../screen/onboarding/splash'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack=createNativeStackNavigator()
export default function MainNavigator() {
     const Splash = ()=>{
         const navigation = useNavigation()
         useEffect(() =>{
             setTimeout(() =>{
                 navigation.navigate('SelectUser')
             },3000)
         },[])
    }
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
    <Stack.Screen name="SelectUser" component={SelectUser} options={{headerShown:false}} />
    <Stack.Screen name="JobPostingNavigator" component={JobPostingNavigator} options={{headerShown:false}} />
    <Stack.Screen name="JobSearchNavigator" component={JobSearchNavigator} options={{headerShown:false}} />
     
    </Stack.Navigator>
  </NavigationContainer>
  )
}
