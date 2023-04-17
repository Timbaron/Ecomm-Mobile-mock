import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({title, color, width, onPress}) => {
  return (
    <TouchableOpacity style={styles.btn(color,width)} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  btn: (color,width) => ({
    marginTop: 10,
    height: 50,
    width: width,
    borderRadius: 9,
    backgroundColor: color,
    justifyContent: "center",
    alignItems: "center"
  })
})