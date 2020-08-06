import React from 'react';
import { scoreType } from '../Types/types';

export const ScoreCard: React.FC<scoreType> = ({score, total, callback}) => {

return (
    <div className="Score-container">
        Score: {score} out of {total}
        <div className="button-container">
            <button onClick = {callback}>Try Again</button>
        </div>
    </div>
)

}