import React, { useState } from 'react';
import './PublishPage.css';

const PublishPage = () => {
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  return (
    <div className="container">
      <div className="header">
        <button className="back-button">&#8592;</button>
        <h3>Publish</h3>
      </div>
      <form className="form">
        <div className="section purple-background">
          <div className="form-group">
            <label>Title</label>
            <input type="text" placeholder="LKG Evaluation" value="LKG Evaluation" readOnly />
          </div>
          <div className="form-group">
            <label>Selected Class or Student</label>
            <input type="text" placeholder="Publish to Abhishek S" value="Publish to Abhishek S" readOnly />
            <input type="text" placeholder="LKG B" value="LKG B" readOnly />
          </div>
        </div>

        <div className="section">
          <h4>Publish via</h4>
          <div className="form-group">
            <div className="checkbox-group">
              <input type="checkbox" defaultChecked />
              <label>Email</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
              <button className="edit-button">&#9998;</button>
            </div>
          </div>
          <div className="form-group">
            <div className="checkbox-group">
              <input type="checkbox" defaultChecked />
              <label>Whatsapp</label>
              <input 
                type="text" 
                value={whatsapp} 
                onChange={(e) => setWhatsapp(e.target.value)} 
              />
              <button className="edit-button">&#9998;</button>
            </div>
          </div>
          <div className="form-group">
            <div className="checkbox-group">
              <input type="checkbox" defaultChecked />
              <label>Notification</label>
            </div>
          </div>
        </div>

        <div className="section">
          <h4>Schedule</h4>
          <div className="form-group">
            <input type="radio" name="schedule" />
            <label>Send Now</label>
          </div>
          <div className="form-group">
            <input type="radio" name="schedule" />
            <label>Send Today</label>
          </div>
          <div className="form-group">
            <input type="radio" name="schedule" defaultChecked />
            <label>Select Date</label>
            <input type="date" />
          </div>
        </div>
        <button className="publish-button">Publish</button>
      </form>
    </div>
  );
};

export default PublishPage;