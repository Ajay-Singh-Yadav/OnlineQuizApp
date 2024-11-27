const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// Mock Data
let quizzes = [
  {
    id: 1,
    title: "General Knowledge",
    questions: [
      { question: "What is the capital of France?", answer: "Paris" },
      { question: "What is 2 + 2?", answer: "4" },
    ],
  },
  {
    id: 2,
    title: "Science Quiz",
    questions: [
      { question: "What planet is known as the Red Planet?", answer: "Mars" },
      { question: "What gas do plants absorb?", answer: "Carbon dioxide" },
    ],
  },
];

// GET route for quizzes
app.get('/quizzes', (req, res) => {
  res.status(200).json(quizzes);
});

// POST route to add a new quiz
app.post('/quizzes', (req, res) => {
  const newQuiz = req.body;

  if (!newQuiz.title || !Array.isArray(newQuiz.questions)) {
    return res.status(400).json({ message: 'Invalid quiz data' });
  }

  const newId = quizzes.length > 0 ? quizzes[quizzes.length - 1].id + 1 : 1;
  newQuiz.id = newId;
  quizzes.push(newQuiz);

  res.status(201).json({ message: 'Quiz added successfully', quiz: newQuiz });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
