import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { fetchQuizzes } from '../api/quizApi';

const QuizListScreen = ({ navigation }) => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const loadQuizzes = async () => {
      const data = await fetchQuizzes();
      setQuizzes(data);
    };
    loadQuizzes();
  }, []);

  const handlePress = (quiz) => navigation.navigate('QuizDetails', { quiz });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Quizzes</Text>
      <Text>Hello</Text>
      <FlatList
        data={quizzes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.quizCard} onPress={() => handlePress(item)}>
            <Text style={styles.quizTitle}>{item.title}</Text>
            
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default QuizListScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  quizCard: { padding: 15, backgroundColor: '#f9f9f9', marginBottom: 10, borderRadius: 8 },
  quizTitle: { fontSize: 18 },
});
