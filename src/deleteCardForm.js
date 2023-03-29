import React, { useState } from 'react';
import "./addBucketFormCss.css";
import "./main.css"
function DeleteCardForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [bucketName, setBucketName] = useState("");

  

  return (
    <div>
      <button className="colorb" onClick={() => setIsVisible(true)}>Delete</button>
      {isVisible && (
        <div className="popup-overlay">
          {/* Form content goes here */}
          <div className="popup-container">
          <form className="popup-form">
            <div>
            <label htmlFor="bucket-name" className="form__label">
                Are you sure you want to delete this bucket ?
            </label>
            </div>
            <div class="space">
            <div class="child1">
            <button onClick={() => setIsVisible(false)} type="submit" className="form__button">
                Yes
            </button>
            </div>
            <div class="child2">
            <button onClick={() => setIsVisible(false)} type="submit" className="form__button">
                Cancel
            </button>
            </div>
            </div>
            </form>
            </div>
        </div>
      )}
    </div>
  );
}
export default DeleteCardForm;