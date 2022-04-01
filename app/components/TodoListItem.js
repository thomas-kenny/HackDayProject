import React from 'react'
import {Text, View, StyleSheet, Button} from 'react-native'


export default function TodoListItem({ item, handleClick, handleDelete }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Button title={item.completed ? 'In progress' : 'Complete'} onPress={() => handleClick(item)} />
      <Button title={'Delete'} onPress={() => handleDelete(item)}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});