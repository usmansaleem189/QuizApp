import React from 'react';
import { useState } from 'react';
import './App.css';
import { getQuizDetails } from '../src/Services/quiz-service'
import { QuestionCard } from './Components/QuestionCard';
import { QuizParameters } from './Components/QuizParameters';
import { ScoreCard } from './Components/ScoreCard';
import {QuestionType} from './Types/types';



function App() {

  let [quiz, setQuiz] = useState<QuestionType[]>([]);
  // let [number, setNumber] = useState("5");
  // let [category, setCategory] = useState("9");
  // let [difficulty, setDifficulty] = useState("easy");
  // let [type, setType] = useState("multiple");
  let [questionIndex, setQuestionIndex] = useState(0);
  let [score, setScore] = useState(0);
  let [gameOver, setGameOver] = useState(false);
  let [parameters, setParameters] = useState(false);



  async function fetchData(number: string, difficulty: string, category: string, type: string) {
    const questions: QuestionType[] = await getQuizDetails(number, difficulty, category, type);
    console.log(questions);
    console.log("fetchData Called")
    setQuiz(questions);
  }


  // useEffect(() => {
  //   fetchData();
  // }, [])

  const handleSubmit = (e: React.FormEvent<EventTarget>, submittedAns: string) => {
    e.preventDefault();
    if (submittedAns === quiz[questionIndex].correctAnswer) {
      console.log("True");
      setScore(++score);
    }
    else {
      console.log("False")
    }

    if (questionIndex === (quiz.length - 1)) {
      console.log("Game Over");
      setGameOver(true);
    }
    else {
      setQuestionIndex(++questionIndex);
    }

  }


  const loadQuiz = (e: React.FormEvent<EventTarget>, number: string, category: string, difficulty: string, type: string) => {
    e.preventDefault();
    console.log(number, category, difficulty, type);

    fetchData(number, difficulty, category, type);
    setParameters(true);

  }

  const handleRestart = () => {
    setQuiz([]);
    setQuestionIndex(0);
    setScore(0);
    setParameters(false);
    setGameOver(false);

  }



  return (
    <div className="App">
      <h1>Quiz App</h1>
      {!parameters && <QuizParameters
        callback={loadQuiz}
      />}

      {!quiz.length && parameters && <div>
        Loading...
      </div>

      }

      { !gameOver && parameters && !!quiz.length &&
      <QuestionCard
               question={quiz[questionIndex].question}
               options={quiz[questionIndex].options}
               callback={handleSubmit}
             />
      }

      {gameOver &&  
        <ScoreCard
         score={score}
         total={quiz.length}
         callback={handleRestart}
       />
      }
    </div>
  )


}

export default App;
