import React from 'react';
import { useState } from 'react';

export const QuestionCard: React.FC<any> = ({question, options, callback}) => {

    let [selectedAns, setSelectedAns] = useState("");

    const hanldeSelection = (e: any) => {
        // console.log(e.target.value);
        setSelectedAns(e.target.value);
    }

return (
    <div className="question-container">
        <div>
            {question}
        </div>

        <form onSubmit={(e:any) => callback(e, selectedAns) }>
            {options.map((option:any, ind: number)=> {
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