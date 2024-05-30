import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';  
import WorkoutForm from './WorkoutForm';  
import WorkoutList from './WorkoutList';  

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/Login" element={<Login />} />
                <Route path="/WorkoutForm" element={<WorkoutForm />} />
                <Route path="/WorkoutList" element={<WorkoutList />} />

            </Routes>
        </Router>
    );
};

export default App;




