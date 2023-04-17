import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const SearchButton = () => {
  return (
    <View style={styles.searchButtonView}>
      <TextInput placeholder="Search for Item"/>
    </View>
  )
}

export default SearchButton

const styles = StyleSheet.create({
  searchButtonView: {
    backgroundColor: 'lightgrey',
    height: 40,
    width: "100%",
    padding: 5,
    borderRadius: 9
  }
})