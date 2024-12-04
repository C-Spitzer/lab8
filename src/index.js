import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Profile from './profile'; 
import Dashboard from './dashboard'; 

import reportWebVitals from './reportWebVitals';

// Function for validation
function validate() {
  const chosenNameRegEx = /^[a-zA-Z ]+$/;
  const lastNameRegEx = /^[a-zA-Z'-]+$/;
  const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const fnameValue = document.getElementById('fname')?.value?.trim();
  const lnameValue = document.getElementById('lname')?.value?.trim();
  const emailValue = document.getElementById('email')?.value?.trim();
  const passwordValue = document.getElementById('password')?.value?.trim();
  const seasonValue = document.getElementById('seasons')?.value?.trim();

  if (!chosenNameRegEx.test(fnameValue)) {
    alert('First name must be letters only');
    return false;
  }

  if (!lastNameRegEx.test(lnameValue)) {
    alert('Last name must be letters and apostrophes only');
    return false;
  }

  if (!emailRegEx.test(emailValue)) {
    alert('Email must be in the correct format');
    return false;
  }

  if (!passwordRegEx.test(passwordValue)) {
    alert(
      'Password must be at least 8 characters, include 1 alphabet, 1 number, 1 special character, and 1 uppercase letter'
    );
    return false;
  }

  // Store user data and redirect to the profile page
  localStorage.setItem('firstName', fnameValue);
  localStorage.setItem('lastName', lnameValue);
  localStorage.setItem('email', emailValue);
  localStorage.setItem('season', seasonValue);

  // Redirect to the profile page
  window.location.href = '/profile';
}

// Attach validation to the form
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('register');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      validate();
    });
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Add Dashboard route */}

      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();