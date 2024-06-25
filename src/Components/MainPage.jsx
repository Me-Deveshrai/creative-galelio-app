import React from 'react';
import { Link } from 'react-router-dom';
import { FaClipboard, FaBell, FaFileAlt, FaHistory, FaClipboardList, FaThLarge } from 'react-icons/fa';
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="main-page">
      <h2 className="main-title">Instant AI Report</h2>
      <p className="main-description">Use the power of AI to generate reports in seconds.</p>
      <div className="main-buttons">
        <button className="main-button">
          <FaClipboard className="icon" />
          {/* <span><link to='./Evaluationpage.jsx'>AI Based Term Evaluation</link></span> */}
          <Link to="/evaluationpage">
                <span>AI Based Term Evaluation</span>
            </Link>
        </button>
        <button className="main-button">
          <FaBell className="icon" />
          <span>Weekly Updates</span>
        </button>
        <button className="main-button">
          <FaFileAlt className="icon" />
          <span>Make Portfolio</span>
        </button>
        <button className="main-button">
          <FaHistory className="icon" />
          <span>History, Drafts, Saved</span>
        </button>
      </div>
      <div className="navigation-bar">
        <button className="nav-button">
          <FaClipboardList className="nav-icon" />
          <span className="nav-text">Lesson Plan</span>
        </button>
        <button className="nav-button">
          <FaFileAlt className="nav-icon" />
          <span className="nav-text">Report</span>
        </button>
        <button className="nav-button">
          <FaThLarge className="nav-icon" />
          <span className="nav-text">More Options</span>
        </button>
      </div>
    </div>
  );
};

export default MainPage;
