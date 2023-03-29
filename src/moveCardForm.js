import React, { useState } from 'react';
import "./addBucketFormCss.css";
function MoveCardForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [bucketName, setBucketName] = useState("");

  return (
    <div>
      <button onClick={() => setIsVisible(true)}>Add a Bucket</button>
      {isVisible && (
        <div className="popup-overlay">
          {/* Form content goes here */}
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

export default MoveCardForm;