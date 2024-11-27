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
    "questions": [
        {
            "question": "Everything in React is a __________",
            "answers": [
                "Module",
                "Component",
                "Hooks",
                "Template"
            ],
            "correctIndex": 1
        },
        {
            "question": "What of the following is used in React.js to increase performance?",
            "answers": [
                "Original DOM",
                "Virtual DOM",
                "Both A & B",
                "None Of The Above"
            ],
            "correctIndex": 1
        },
        {
            "question": "Which of the following acts as the input of a class-based component?",
            "answers": [
                "Class",
                "Factory",
                "Render",
                "Props"
            ],
            "correctIndex": 3
        },
        {
            "question": "What is ReactJs?",
            "answers": [
                "Server side framework ",
                "A Library for building interaction interfaces ",
                "Client Side Framework ",
                "None of the Above"
            ],
            "correctIndex": 1
        },
        {
            "question": "React is ............ Javascript library ",
            "answers": [
                "Module based",
                "Component based",
                "System based",
                "All are correct"
            ],
            "correctIndex": 1
        },
        {
            "question": "A valid react component can return ...... number of elements. ",
            "answers": [
                "1",
                "2",
                "3",
                "None of the Above"
            ],
            "correctIndex": 0
        },
        {
            "question": "Which of the following API is a MUST for every ReactJS component? ",
            "answers": [
                "getInitialState",
                "render",
                "renderComponent",
                "None"
            ],
            "correctIndex": 2
        },
        {
            "question": "What is the default port for webpack dev server? ",
            "answers": [
                "3000",
                "8080",
                "3306",
                "8809"
            ],
            "correctIndex": 1
        },
        {
            "question": "React Js is developed by ",
            "answers": [
                "Google",
                "Microsoft",
                "Facebook",
                "None of the Above"
            ],
            "correctIndex": 2
        },
        {
            "question": "Which of the following is a correct definition of state in react? ",
            "answers": [
                "A persistent storage ",
                "An internal data store (object) of component",
                "Both",
                "None"
            ],
            "correctIndex": 1
        }
    ]
  }
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
