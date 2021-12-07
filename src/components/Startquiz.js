import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import styled from 'styled-components'

import Quiz from './Quiz';

function Startquiz() {

    const [quizOneStarted, setQuizOneStarted] = useState(false);
    const [quizTwoStarted, setQuizTwoStarted] = useState(false);

    const handleQuizOneStart = () => {
        setQuizOneStarted(true)
    }

    const handleQuizTwoStart = () => {
        setQuizTwoStarted(true)
    }

    return (
        <Container fluid style={{ textAlign: "center" }}>
            <Row style={{ height: "100vh" }}>
                <Col style={{ borderRight: "5px solid #2E4C6D" }}>
                    {
                        quizOneStarted
                            ?
                            <Quiz quizNumber={1}/>
                            :
                            <StyledButton variant="primary" size="lg" onClick={handleQuizOneStart}> Start Quiz 1 </StyledButton>

                    }

                </Col>
                <Col>
                    {
                        quizTwoStarted
                            ?
                            <Quiz quizNumber={2}/>
                            :
                            <StyledButton variant="primary" size="lg" onClick={handleQuizTwoStart}> Start Quiz 2</StyledButton>
                    }
                    
                </Col>
            </Row>
        </Container>
    )
}

const StyledButton = styled(Button)`

position: absolute;
top: 50%;
`

export default Startquiz;
