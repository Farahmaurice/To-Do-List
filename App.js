import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

const App = () => {
  const [todos, setTodos] = useState([]);

  // Add a new task
  const addTodoHandler = (task) => {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: Math.random().toString(), text: task, completed: false },
    ]);
  };

  // Mark a task as completed
  const toggleTodoHandler = (id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a task
  const deleteTodoHandler = (id) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <AddTodo onAddTodo={addTodoHandler} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem
            item={item}
            onToggle={toggleTodoHandler}
            onDelete={deleteTodoHandler}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default App;