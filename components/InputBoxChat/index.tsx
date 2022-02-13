import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from '../InputBoxChat/style'

export default function InputBoxChat() {

    const [message, setMessage]= useState('');
    const onMicPressed = () =>{
        // sending voice note
        console.warn("Sendding Voice Note...")
    }
    const onSendPressed = () =>{
        //sending message
        console.warn("Sendding Message...")
    }
    //onPress button handling
    const onPress= () =>{
        if(!message){
            onMicPressed();
        }else{
            onSendPressed();
        }
    }

  return (
      <View style={styles.container}>
          <View style={styles.inputBox}>
                <MaterialCommunityIcons name="sticker-emoji" size={24} color="grey" />
                <TextInput style={styles.textInput} 
                    placeholder={"Type a message.."}
                    multiline
                    value={message}
                    onChangeText={setMessage} //save value to the state
                />
                <Ionicons style={styles.attachIcon} name="attach" size={24} color="grey" />
                {!message && <Ionicons name="camera" size={24} color="grey" />}
          </View>
          <TouchableOpacity
          onPress={onPress}
          >
            <View style={styles.icon}>
                {!message ? <FontAwesome name="microphone" size={28} color="white" /> :<Ionicons name="send" size={28} color="white" />}
            </View>
          </TouchableOpacity>
      </View>
  )
}
