
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QuizDetailsScreen = ({ route }) => {
  const { quiz } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{quiz.title}</Text>
      {quiz.questions.map((q, index) => (
        <View key={index} style={styles.questionContainer}>
          <Text style={styles.question}>{q.question}</Text>
          <Text style={styles.answer}>Answer: {q.answer}</Text>
        </View>
      ))}
    </View>
  );
};

export default QuizDetailsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  questionContainer: { marginBottom: 15 },
  question: { fontSize: 18 },
  answer: { fontSize: 16, color: 'green' },
});
