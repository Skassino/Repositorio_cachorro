import styles from '@/src/screens/css_index/style_index'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'

const index = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botao}>Ver cachorro</TouchableOpacity>
    </View>
  )
}

export default index