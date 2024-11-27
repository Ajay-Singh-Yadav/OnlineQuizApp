import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import QuizListScreen from './screens/QuizListScreen';
import QuizDetailsScreen from './screens/QuizDetailsScreen';
import AddQuizScreen from './screens/AddQuizScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="QuizList">
        <Stack.Screen name="QuizList" component={QuizListScreen} options={{ title: 'Quizzes' }} />
        <Stack.Screen name="QuizDetails" component={QuizDetailsScreen} options={{ title: 'Quiz Details' }} />
        <Stack.Screen name="AddQuiz" component={AddQuizScreen} options={{ title: 'Add Quiz' }} /> 
             </Stack.Navigator>
    </NavigationContainer>
  );
}
