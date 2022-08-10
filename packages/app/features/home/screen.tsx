import { MaterialIcons } from '@expo/vector-icons'
import { Center, Icon } from 'native-base'
import React from 'react'

export function HomeScreen() {
  return (
    <Center flex={1}>
      <Icon size="sm" as={MaterialIcons} name="menu" />
    </Center>
  )
}
