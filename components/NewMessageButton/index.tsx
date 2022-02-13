import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import styles from '../NewMessageButton/style'
import { View } from '../Themed'

export default function NewMessageButton() {
  return (
      <View style={styles.container}>
          <AntDesign name="message1" size={24} color="white" />
      </View>
  )
}
