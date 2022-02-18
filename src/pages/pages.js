import React from 'react';
import { Router } from '@reach/router';
import Task1 from './task-1/task-1';
import Task2 from './task-2/task-2';




const Pages = () => {
    return(
        <Router>
            <Task1 path="/" />
            <Task2 path="/task-2" />
        </Router>
    )
}
export default Pages;