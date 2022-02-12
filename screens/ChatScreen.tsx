import React from 'react'
import { StyleSheet } from 'react-native'
import ChatList from '../components/ChatItem'
import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View } from '../components/Themed'
import ChatRooms from '../data/ChatRoom'

export default function ChatScreen() {
  return (
    <View style={style.container}>
      <ChatList chatRoom={ChatRooms[0]}/> 
      {/* send all message */}
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
