import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const QuizCard = ({ quiz, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View>
        <Text style={styles.title}>{quiz.title}</Text>
        <Text style={styles.questionsCount}>
          {quiz.questions.length} Questions
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  questionsCount: {
    marginTop: 5,
    fontSize: 14,
    color: '#666',
  },
});

export default QuizCard;
