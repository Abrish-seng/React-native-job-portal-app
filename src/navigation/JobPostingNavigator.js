import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import LoginForCompany from '../screen/jobposting/LoginForCompany'
import SignupForCompany from '../screen/jobposting/SignupForCompany'
const Stack=createNativeStackNavigator()
export default function JobPostingNavigator() {
  return (
    <Stack.Navigator>
          <Stack.Screen name='LoginForCompany' component={LoginForCompany} options={{headerShown:false}}/>
          <Stack.Screen name='SignupForCompany' component={SignupForCompany} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}
