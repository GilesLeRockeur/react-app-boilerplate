import React, { useState } from 'react';

const Home = () => {
    const [response, setResponse] = useState('');

    const handleButtonClick = (buttonType) => {
        fetch('http://localhost:5002/api/button-click', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ buttonType }), // Use the passed buttonType here
        })
          .then((response) => response.json())
          .then((data) => setResponse(data.response))
          .catch((error) => console.error('Error:', error));
      };
      

    return (
        <div className="container">
            <h1 className="title">Welcome to Our Website</h1>
            <h2 className="subtitle">A Simple Welcome Page</h2>
            <div className="box">
                <p className="paragraph">{response || 'Click a button to change this text'}</p>
            </div>
            <div>
                <button className="primary-button" onClick={() => handleButtonClick('primary')}>
                    Primary Button
                </button>
                <button className="secondary-button" onClick={() => handleButtonClick('secondary')}>
                    Secondary Button
                </button>
            </div>
        </div>
    );
};

export default Home;
