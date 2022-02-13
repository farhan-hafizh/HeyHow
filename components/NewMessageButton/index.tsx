import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from '../NewMessageButton/style'
import { View } from '../Themed'

export default function NewMessageButton() {
    
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('Contacts');
    }
  return (
      <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <AntDesign name="message1" size={24} color="white" />
            </TouchableOpacity>
        </View>
  )
}
