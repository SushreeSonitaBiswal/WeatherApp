/* eslint-disable no-unused-vars */

import React, { useState } from 'react';  // Import React and useState hook
 

function Home() {
  // State variables for city, weather, and error message
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState('22°C');
  const [humidity, setHumidity] = useState('20%');
  const [windSpeed, setWindSpeed] = useState('2 km/h');
  const [error, setError] = useState('');

  // Handle search button click
  const handleSearch = () => {
    // Simple validation to check if city input is empty
    if (!city) {
      setError('Please enter a city name.');
      return;
    }

    // Mocked weather data (replace with an API call later)
    setTemperature('25°C');  // Mock temperature
    setHumidity('65%');       // Mock humidity
    setWindSpeed('10 km/h');  // Mock wind speed
    setError('');  // Clear any previous error

    // For now, we'll just log the search action
    console.log(`Searching weather for ${city}`);
  };

  return (
    <div className="container">
      <div className="weather">
        <div className="search">
          <input
            type="text"
            placeholder="Enter City name"
            value={city}  // Bind value to state
            onChange={(e) => setCity(e.target.value)}  // Update state on input change
          />
          <button onClick={handleSearch}>
            <img src="/images/SearchIcon.png" alt="Search" />
          </button>
        </div>

        {/* Error message if city is not entered */}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <div className="winfo">
          {/* Weather Icon (change src to dynamic or use a default image) */}
          <img src="/images/cloud.png" alt="Weather Icon" />
          <h1>{temperature}</h1> {/* Display dynamic temperature */}
          <h2>{city || 'BBSR'}</h2> {/* Default to 'BBSR' if no city entered */}
          
          <div className="details">
            <div className="col">
              <img src="/images/humidity.png" alt="Humidity Icon" />
              <div className="humidity">
                <p>{humidity}</p>
                <p>Humidity</p>
              </div>
            </div>

            <div className="col">
              <img src="/images/wind.png" alt="Wind Icon" />
              <div className="wind">
                <p>{windSpeed}</p>
                <p>Wind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;



