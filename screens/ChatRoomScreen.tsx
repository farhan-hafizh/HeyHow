import { useRoute } from '@react-navigation/native'
import React from 'react'
import { FlatList, ImageBackground, StyleSheet, View } from 'react-native';
import ChatMessage from '../components/ChatMessage';
import { Text} from '../components/Themed'
import Chats from '../data/Chats';
import BG from '../assets/images/BG.jpeg';
import InputBoxChat from '../components/InputBoxChat';

export default function ChatRoomScreen() {

  const route = useRoute();

  return (
    <View style={style.container}>
        <ImageBackground style={{width:'100%',height:'100%'}} source={BG}>
            <FlatList
                data={Chats.messages}
                renderItem={({item}) => <ChatMessage message={item}/>}
                inverted
            />
            <InputBoxChat/>
        </ImageBackground>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
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

