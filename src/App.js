import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import QuizRoutes from './QuizRoutes';

function App() {
  return (
    <div className="App">
      <div>
        <Header>
          <h1>Maths Quiz</h1>
          <p>Please do not refresh the page once quiz started</p>
        </Header>

        {/* Routes */}
        <QuizRoutes />
      </div>

    </div>
  );
}

const Header = styled.div`

  text-Align : center;
  font-family: 'Roboto', sans-serif;
  background-color: #2E4C6D;
 
  h1{
    padding : 2rem 0;
    color: #fff;
    margin: 0;
  }

  p{
    color: #fff;
  }
`

export default App;