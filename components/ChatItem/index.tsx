import React from 'react'
import { Image, Text, View } from 'react-native'
import { ChatRoom } from '../../types'
import { Avatar } from 'react-native-elements';
import styles from './style'
import moment from 'moment';

export type ChatListItem ={
    chatRoom : ChatRoom;
}

export default function ChatList(props : ChatListItem) {
    const { chatRoom } = props; //asign props to chatroom type inside chatlistitem
    
    const user=chatRoom.users[1];
    return (
    <View style={styles.chat}>
      <View style={styles.chatLeft}>
      <Avatar
            size={55}
            rounded
            source={{ uri: user.imageUri }}
            title="Profile"
            containerStyle= {styles.avatar}
          ></Avatar>
      <View style={styles.chatMessage}>
        <Text style={styles.chatUser}>{user.name}</Text>
        <View style={{width:"100%"}}>
          <Text style={styles.lastMessage} numberOfLines={1} ellipsizeMode="tail">{chatRoom.lastMessage.content}</Text>
        </View>
      </View>
      </View>
      <Text style={styles.time}>{moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}</Text>
    </View>
  )
}

