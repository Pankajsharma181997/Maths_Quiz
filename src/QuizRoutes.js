import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Startquiz from './components/Startquiz';

function QuizRoutes() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Startquiz} />
                </Switch>
            </Router>

        </>
    )
}

export default QuizRoutes;
