import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { addQuiz } from '../api/quizApi';

const AddQuizScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState('');

  const handleAddQuiz = async () => {
    try {
      const parsedQuestions = JSON.parse(questions); // Expecting questions in JSON format
      const quizData = { title, questions: parsedQuestions };

      await addQuiz(quizData);
      Alert.alert('Success', 'Quiz added successfully!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to add quiz. Please try again.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Quiz Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter quiz title"
      />
      <Text style={styles.label}>Questions (JSON format)</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        value={questions}
        onChangeText={setQuestions}
        placeholder='Enter questions (e.g., [{"question":"...","answer":"..."}])'
        multiline
      />
      <Button title="Add Quiz" onPress={handleAddQuiz} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default AddQuizScreen;
