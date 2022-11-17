import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Text } from 'react-native'

let Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={() => {
            return (
              <Text>HEllo world</Text>
            )
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation