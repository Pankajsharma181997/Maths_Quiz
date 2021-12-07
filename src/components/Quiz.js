import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components';
import FinalResult from './FinalResult';

function Quiz({quizNumber}) {

    const [questionNumber, setQuestionNumber] = useState(1);

    const [result, setResult] = useState(null);

    const [evaluation, setEvaluation] = useState([])

    const [operands, setOperands] = useState({
        "first": null,
        "second": null
    });

    const [operator, setOperator] = useState('');

    useEffect(() => {
        setOperands({
            "first": generateRandomNumber(),
            "second": generateRandomNumber()
        })

        generateRandomOperator();

    }, [questionNumber])

    const generateRandomNumber = () => {

        return Math.floor(Math.random() * 10);

    }

    const generateRandomOperator = () => {
        const operators = ['+', '-', '*', '/'];

        let rand = Math.floor(Math.random() * 4);

        setOperator(operators[rand]);
    }

    const evaluateAnswer = (e) => {

        let ans = null;

        if (operator === '+') {
            ans = operands.first + operands.second;
        }
        if (operator === '-') {
            ans = operands.first - operands.second;
        }
        if (operator === '*') {
            ans = operands.first * operands.second;
        }
        if (operator === '/') {
            ans = parseInt(operands.first / operands.second);
        }

        console.log(e.target.value);
        let answer = '';

        if (ans == result) {
            answer = 'correct'
        }
        else {
            answer = 'incorrect'
        }

        setEvaluation([
            ...evaluation,
            {
                    "id":questionNumber,
                    "operand1": operands.first,
                    "operand2": operands.second,
                    "operator": operator, //[+,-,*,/]
                    "answer": answer, //[correct,incorrect,unattempted]
                    "myAnswer": result,
                    "correctAnswer": ans
            }
        ])

        setQuestionNumber(questionNumber + 1);
    }

    return (
        <>
            {
                questionNumber < 11 ? (
                    <StyledContainer>
                <div>
                    <h1>Quiz {quizNumber}</h1>
                </div>

                <div className="question">
                    <div className="number">
                        <h3>Que{questionNumber}=</h3>
                    </div>
                    <div className="expression">
                        <span>
                            <h3>{operands.first}</h3>
                        </span>
                        <span>
                            <h3>{operator}</h3>
                        </span>
                        <span>
                            <h3>{operands.second}</h3>
                        </span>
                        <span>
                            <h3>=</h3>
                        </span>
                        <input type="number" name="answer" onChange={(e) => setResult(e.target.value)}></input>

                    </div>
                </div>

                <div>
                    {
                        questionNumber > 10 ? (
                            <Button variant="primary">Submit</Button>
                        ) : (
                            <Button variant="primary" onClick={evaluateAnswer}>Next</Button>
                        )
                    }

                </div>

            </StyledContainer>
                ) : (
                    <FinalResult evaluationResult={evaluation}/>
                )
            }
            
        </>
    )
}

const StyledContainer = styled.div`
    margin: 4rem;
    background-color: #B2B1B9;
    height : 30rem;
    border-radius :10px; 

    div > h1 {
        padding-top: 1rem;
        font-family: 'Roboto', sans-serif;
    }

    div > h3 {
        padding-right: 2rem;
        font-family: 'Roboto', sans-serif;
    }

    .question{
        margin: 4rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .number{
            display: flex;
            flex-direction: row;
        }

        .expression{
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            span {
                margin-right: 30px;
                height: 3rem;
                width: 3rem;
                background-color: #fff;
                border: solid #CCCCCC 2px;
            }

            input{
                width:50%;
            }
        }
    }
`

export default Quiz;
