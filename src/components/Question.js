import React from 'react'

import styled from 'styled-components'

function Question({ result }) {

    console.log(result)
    return (
        <>
            <QuizQuestion>
                <h3>Q{result.id}&nbsp;&nbsp;&nbsp;=</h3>

                <div className="question">
                    <h3>{result.operand1}&nbsp;&nbsp;</h3>
                    <h3>{result.operator}&nbsp;&nbsp;</h3>
                    <h3>{result.operand2}&nbsp;&nbsp;</h3>
                </div>

                <div className="answer">
                    <h3>=</h3>
                    <h3>{result.myAnswer}</h3>
                </div>

                <div className="evaluation">
                    <h3 className={result.answer}>{result.answer}</h3>
                </div>
            </QuizQuestion>
            <div className="result">
                Correct Answer = {result.correctAnswer}
            </div>
        </>

    )
}

const QuizQuestion = styled.div`

    margin: 2rem;
    background-color: #B2B1B9;
    border-radius: 10px;

    display:flex;
    flex-direction:row;

    h3{
        padding: 0 2rem;
    }

    .question{
        display:flex;
        flex-direction:row;
        justify-content:middle;
        border-radius: 10px;
        background-color: #F0BB62;

    }

    .answer{
        display:flex;
        flex-direction:row;
    }

    .evaluation{
        .correct{
            color: green;
        }
        .incorrect{
            color: red;
        }
    }

`

export default Question
