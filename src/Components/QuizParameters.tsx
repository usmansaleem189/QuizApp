import React from 'react';
import {useState} from 'react';
import { parametersType } from '../Types/types';

export const QuizParameters: React.FC<parametersType> = ({callback}) => {

    let [number, setNumber] = useState("5");
    let [category, setCategory] = useState("9");
    let [difficulty, setDifficulty] = useState("easy");
    let [type, setType] = useState("multiple");

    const handleNumber = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setNumber(e.target.value);
    }

    const handleCategory = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value);
    }

    const handleDifficulty = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setDifficulty(e.target.value);
    }

    const handleType = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setType(e.target.value);
    }



return (
    <form onSubmit={(e:React.FormEvent<EventTarget>) => callback(e, number, category, difficulty, type) } className="parameters-container">
    {
      <div >
        <label>Number of Questions: </label>
        <select defaultValue="5" onChange={handleNumber}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
        <br />
        <label>Select Category: </label>
        <select defaultValue="9" onChange={handleCategory}>
          <option value="9">General Knowledge</option>
          <option value="18">Computer</option>
          <option value="23">History</option>
          <option value="12">Music</option>
        </select>
        <br />
        <label>Select Difficulty: </label>
        <select defaultValue="easy" onChange={handleDifficulty}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <br />
        <label>Select Type: </label>
        <select defaultValue="multiple" onChange={handleType}>
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True / False</option>
        </select>
        <br />

      </div>
    }
    <input type="submit" value="Submit" />
  </form>
)

}