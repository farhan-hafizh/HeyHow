import React from 'react'
import { FlatList } from 'react-native'
import { StyleSheet } from 'react-native'
import ChatList from '../components/ChatItem'
import ContactsListItem from '../components/ContactsItem'
import EditScreenInfo from '../components/EditScreenInfo'
import NewMessageButton from '../components/NewMessageButton'
import { Text, View } from '../components/Themed'
import ChatRooms from '../data/ChatRoom'
import User from '../data/User'

export default function ChatScreen() {
  return (
    <View style={style.container}>
      <FlatList
        data={User}
        renderItem={( {item} ) => <ContactsListItem user={item}/>}
        keyExtractor={(item) => item.id}
      /> 
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
