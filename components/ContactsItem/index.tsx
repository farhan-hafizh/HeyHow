import React from 'react'
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native'
import { ChatRoom, User } from '../../types'
import { Avatar } from 'react-native-elements';
import styles from './style'
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';

export type ContactListItem ={
    user : User;
}

export default function ContactsListItem(props : ContactListItem) {
    const { user } = props; //asign props to user 
    

    const navigation = useNavigation();// call navigation

    const onClick = () =>{ //onclick touchable
      navigation.navigate('ChatRoom', {
        id : chatRoom.id,
        name : user.name,
        imageUri : user.imageUri
      }); //open chat room and send chat room id
    }
    return (
    <TouchableWithoutFeedback onPress={onClick}>
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
              <Text style={styles.status} numberOfLines={1} ellipsizeMode="tail">{user.status}</Text>
            </View>
          </View>
          </View>
        </View>
    </TouchableWithoutFeedback>
  )
}

