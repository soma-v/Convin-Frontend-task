import React, { useState } from 'react';
import "./addBucketFormCss.css";
function PopUpForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [bucketName, setBucketName] = useState("");

  

  return (
    <div>
      <a className="click" onClick={() => setIsVisible(true)} style={{ color: "white", background: "#29335c" }}>Add a Bucket</a>
      {isVisible && (
        <div className="popup-overlay">
          <div className="popup-container">
          <form className="popup-form">
            <div>
            <label htmlFor="bucket-name" className="form__label">
                Bucket Name
            </label>
            </div>
            <div>
            <input
                id="bucket-name"
                className="form__input"
                type="text"
                value={bucketName}
                onChange={(e) => setBucketName(e.target.value)}
            />
            </div>
        <br></br>
            <div>
            <button onClick={() => setIsVisible(false)} type="submit" className="form__button">
                Submit
            </button>
            </div>
            </form>
            </div>
        </div>
      )}
    </div>
  );
}

export default PopUpForm;