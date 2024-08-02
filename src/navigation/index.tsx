import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import LoginScreen from '../screens/Login'
import { RootStackParamList } from './types'



function Navigation() {
	const Stack = createStackNavigator<RootStackParamList>()

	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName={'Login'}
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen name={'Login'} component={LoginScreen} />
				
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigation
