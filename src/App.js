import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                </header>
                <Routes />
            </div>
        </Router>
    );
}

export default App;
