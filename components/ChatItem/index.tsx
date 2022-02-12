import React from 'react'
import { Text, View } from 'react-native'
import { ChatRoom } from '../../types'

export type ChatListItem ={
    chatRoom : ChatRoom;
}

export default function ChatList(props : ChatListItem) {
    const { chatRoom } = props; //asign props to chatroom type inside chatlistitem
  return (
    <View>
        <Text>{chatRoom.lastMessage.content}</Text>
    </View>
  )
}
