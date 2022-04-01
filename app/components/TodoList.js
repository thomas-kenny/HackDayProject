import {React, useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import TodoListItem from './TodoListItem';

export default function TodoList({todoList, handleClick, handleDelete}){

  const renderItem = ({ item }) => (
    <TodoListItem item={item} handleClick={handleClick} handleDelete={handleDelete} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={todoList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

