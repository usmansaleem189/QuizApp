import React from 'react';
import { useState } from 'react';
import {questionPropsType} from './../Types/types'

export const QuestionCard: React.FC<questionPropsType> = ({question, options, callback}) => {

    let [selectedAns, setSelectedAns] = useState("");

    const hanldeSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.value);
        setSelectedAns(e.target.value);
    }

return (
    <div className="question-container">
        <div>
            {question}
        </div>

        <form onSubmit={(e:React.FormEvent<EventTarget>) => callback(e, selectedAns) }>
            {options.map((option:string, ind: number)=> {
                return (
                    <div key={ind}>
                        <input 
                        type="radio"
                        name="option"
                        value = {option}
                        required
                        checked = {selectedAns === option}
                        onChange = {hanldeSelection}
                        />
                        {option}
                    </div>
                )
            })}

            <input type="submit" value="Submit Answer" />
        </form>


    </div>
)


}