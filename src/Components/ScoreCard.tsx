import React from 'react';

export const ScoreCard: React.FC<any> = ({score, total, callback}) => {

return (
    <div className="Score-container">
        Score: {score} out of {total}
        <div className="button-container">
            <button onClick = {callback}>Try Again</button>
        </div>
    </div>
)

}