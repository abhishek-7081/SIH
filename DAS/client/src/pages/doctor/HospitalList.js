import React, { useState, useEffect } from 'react';

const HospitalList = () => {
  const [demoArea, setDemoArea] = useState(null); // State to store the demoArea data
  const [loading, setLoading] = useState(true);   // Loading state
  const [error, setError] = useState(null);       // Error state

  // Fetch data from the API when the component mounts
  useEffect(() => {
    fetch('/api/hospitals') // Replace this with your actual API endpoint
      .then(response => response.json())
      .then(data => {
        console.log('Fetched Data:', data);  // Debugging log
        setDemoArea(data.demoArea);          // Store the demoArea in state
        setLoading(false);                   // Stop loading
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        setError(err);                       // Store the error
        setLoading(false);                   // Stop loading in case of error
      });
  }, []);

  // Show loading message
  if (loading) {
    return <p>Loading hospitals...</p>;
  }

  // Show error message if there was an error
  if (error) {
    return <p>Error loading hospitals: {error.message}</p>;
  }

  // Render the hospital data
  return (
    <div>
      <h1>Hospitals</h1>
      {/* Ensure demoArea is defined and contains hospitals */}
      {demoArea && demoArea.hospitals?.length > 0 ? (
        demoArea.hospitals.map((hospital, hospitalIndex) => (
          <div key={hospitalIndex}>
            <h2>{hospital.hospitalName}</h2>
            <ul>
              {hospital.tickOptions?.length > 0 ? (
                hospital.tickOptions.map((option, optionIndex) => (
                  <li key={optionIndex}>
                    {option.option}: {option.checked ? 'Checked' : 'Not Checked'}
                  </li>
                ))
              ) : (
                <li>No services available</li>
              )}
            </ul>
          </div>
        ))
      ) : (
        <p>No hospitals found.</p>
      )}
    </div>
  );
};

export default HospitalList;
