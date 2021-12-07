import React, { useState,useEffect } from 'react'

import Question from './Question'

function FinalResult({ evaluationResult }) {

    const [correctQues,setCorrectQues] = useState(0);

    const calculateScore = () => {

        let countCorrect = 0;
        let countIncorrect = 0;

        evaluationResult.forEach((question) => {
            if(question.answer === "correct"){
                countCorrect=countCorrect+1;
            }else{
                countIncorrect=countIncorrect+1;
            }
        })

        setCorrectQues(countCorrect);
    }

    useEffect(() => {
        console.log("USEEFFECT CALLED")
        calculateScore();

    },[])

    return (
        <>
            <div className="score">
                <h3>Score : {correctQues}/10</h3>
            </div>
            <div className="questions">
                {
                    evaluationResult.map(question => (
                        <Question key={question.id} result={question}/>
                    ))
                }
            </div>
        </>


    )
}

export default FinalResult;
