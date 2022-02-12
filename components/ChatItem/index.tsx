import React from 'react'
import { Image, Text, View } from 'react-native'
import { ChatRoom } from '../../types'
import { Avatar } from 'react-native-elements';
import styles from './style'

export type ChatListItem ={
    chatRoom : ChatRoom;
}

export default function ChatList(props : ChatListItem) {
    const { chatRoom } = props; //asign props to chatroom type inside chatlistitem
    
    const user=chatRoom.users[0];
    return (
    <View>
        <Avatar
            size={64}
            rounded
            source={{ uri: user.imageUri }}
            title="Bj"
            containerStyle={{ backgroundColor: 'grey' }}
          ></Avatar>
      {/* <Image source={{ uri:  }} style={styles.avatar}/> */}

        <Text>{chatRoom.lastMessage.content}</Text>
    </View>
  )
}

