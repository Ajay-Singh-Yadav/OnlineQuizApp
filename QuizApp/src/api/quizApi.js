import axios from 'axios';

const API_BASE_URL = 'http://192.168.166.25:3000'; 

export const fetchQuizzes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/quizzes`);
    return response.data;
  } catch (error) {
    console.error('Error fetching quizzes:', error);
    throw error;
  }
};

export const addQuiz = async (quizData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/quizzes`, quizData);
      return response.data;
    } catch (error) {
      console.error('Error adding quiz:', error);
      throw error;
    }
  };