import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import MainPage from './Components/MainPage'; // Import MainPage component
import './App.css'; // Optional: Import your global styles if any
import EvaluationPage from './Components/EvaluationPage';
import PublishPage from './Components/PublishPage';

const App = () => {
  return (
    // <Router>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/evaluationpage" element={<EvaluationPage />} />
      <Route path="/publishpage" element={<PublishPage />} />
      {/* Add more routes as needed */}
    </Routes>
    // </Router>
  );
}

export default App;