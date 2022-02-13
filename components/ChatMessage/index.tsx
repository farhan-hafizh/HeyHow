import moment from 'moment';
import React from 'react'
import { View } from 'react-native';
import Colors from '../../constants/Colors';
import { Message } from '../../types'
import styles from '../ChatMessage/style';
import { Text} from '../Themed'


export type ChatMessageProps={
    message : Message;
}

export default function ChatMessage(props : ChatMessageProps) {
    
    const { message } = props; //put props to message  
    
    const isAuthUserMessage = () =>{
        return message.user.id === 'u1';
    }
 
    return (
      <View style={styles.container}>
          <View style={[styles.messageBox,
          {
              backgroundColor: isAuthUserMessage() ? Colors.light.secondTint :"#e5e5e5",
              marginLeft: isAuthUserMessage() ? 50 :0,
              marginRight: isAuthUserMessage() ? 0 : 50
          }]}>
            {/* render if  */}
            {!isAuthUserMessage() && <Text style={styles.userName}>{message.user.name}</Text>} 
            <Text>{message.content}</Text>
            <Text style={[styles.time,{alignSelf: isAuthUserMessage()? "flex-end" :"flex-start" }]}>{moment(message.createdAt).fromNow()}</Text>
          </View>
      </View>
  )
}
