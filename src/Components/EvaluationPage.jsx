import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EvaluationPage.css';

const EvaluationPage = () => {
    const navigate = useNavigate();

    const handlePublishClick = () => {
    navigate('/publishpage');
    };

    return (
      <div className="container">
        <div className="header">
          <button className="back-button">&#8592;</button>
          <h3>Edit term evaluation</h3>
          <button className="save-button">SAVE</button>
        </div>
        <form className="form">
          <div className="form-group">
            <label className="form-text-bold">Type Name:</label>
            <input type="text" placeholder="Search" />
          </div>
          <div className="form-group">
            <label className="form-text-bold">Select Grade*:</label>
            <div className="radio-group">
              <input type="radio" id="LKG" name="grade" value="LKG" />
              <label htmlFor="LKG">LKG</label>
              <input type="radio" id="UKG" name="grade" value="UKG" />
              <label htmlFor="UKG">UKG</label>
              <input type="radio" id="Nursery" name="grade" value="Nursery" />
              <label htmlFor="Nursery">Nursery</label>
            </div>
          </div>
          <div className="form-group">
            <label className="form-text-bold">Select Class*:</label>
            <div className="radio-group">
              <input type="radio" id="classA" name="class" value="A" />
              <label htmlFor="classA">A</label>
              <input type="radio" id="classB" name="class" value="B" />
              <label htmlFor="classB">B</label>
              <input type="radio" id="classC" name="class" value="C" />
              <label htmlFor="classC">C</label>
            </div>
          </div>
          <div className="form-group">
            <label className="form-text-bold">Child Gender*:</label>
            <div className="radio-group">
              <input type="radio" id="she" name="gender" value="she" />
              <label htmlFor="she">She</label>
              <input type="radio" id="he" name="gender" value="he" />
              <label htmlFor="he">He</label>
            </div>
          </div>
          <div className="child-updates">
            <h4>Child Updates</h4>
            <div className="form-group">
              <label className="form-text-bold">Academic Effort</label>
              <div className="radio-group">
                <input type="radio" id="needsEncouragement" name="academicEffort" value="needsEncouragement" />
                <label htmlFor="needsEncouragement">Needs encouragement</label>
                <input type="radio" id="enthusiasticParticipant" name="academicEffort" value="enthusiasticParticipant" />
                <label htmlFor="enthusiasticParticipant">Enthusiastic Participant</label>
                <input type="radio" id="fastLearner" name="academicEffort" value="fastLearner" />
                <label htmlFor="fastLearner">Fast learner</label>
              </div>
            </div>
            <div className="form-group">
              <label className="form-text-bold">Subject Strength</label>
              <select>
                <option>Select</option>
                <option>Math</option>
                <option>Science</option>
                <option>English</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-text-bold">Social interactions</label>
              <div className="radio-group">
                <input type="radio" id="friendlyOutgoing" name="socialInteractions" value="friendlyOutgoing" />
                <label htmlFor="friendlyOutgoing">Friendly outgoing</label>
                <input type="radio" id="reservedShy" name="socialInteractions" value="reservedShy" />
                <label htmlFor="reservedShy">Reserved shy</label>
              </div>
            </div>
          </div>
          <div className="buttons">
            <button type="button" className="edit-button">Edit</button>
            <button type="button" className="save-button">Save</button>
            <button type="button" className="publish-button" onClick={handlePublishClick}>Publish</button>
          </div>
        </form>
      </div>
    );
  };
  
  export default EvaluationPage;