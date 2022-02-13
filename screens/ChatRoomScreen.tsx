import { useRoute } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed'

export default function ChatRoomScreen() {

  const route = useRoute();

  return (
    <View style={style.container}>
        <Text>ChatRoom</Text>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
      },
})

