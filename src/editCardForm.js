import React, { useState } from 'react';
import "./addBucketFormCss.css";

function EditCardForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [bucketName, setBucketName] = useState("");
  const [selectedBucket, setSelectedBucket] = useState("");

  const handleSelectBucket = (e) => {
    setSelectedBucket(e.target.value);
  }

  return (
    <div>
      <button className="colorb" onClick={() => setIsVisible(true)}>Edit</button>
      {isVisible && (
        <div className="popup-overlay">
          <div className="popup-container">
            <form className="popup-form" style={{height:"400px"}}>
              <div>
                <label htmlFor="card-name" className="form__label">
                  Name of the card
                </label>
              </div>
              <div>
                <input
                  id="card-name"
                  className="form__input"
                  type="text"
                  value={bucketName}
                  onChange={(e) => setBucketName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="video-link" className="form__label">
                  Link of the video
                </label>
              </div>
              <div>
                <input
                  id="video-link"
                  className="form__input"
                  type="text"
                  value={bucketName}
                  onChange={(e) => setBucketName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="bucket-name" className="form__label">
                  Do you want to move the Card? 
                  <br></br>
                  Bucket Name
                </label>
              </div>
              <div>
                <select
                  id="bucket-name"
                  className="form__input"
                  value={selectedBucket}
                  onChange={handleSelectBucket}
                >
                  <option value="">--Select a bucket--</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="sports">Sports</option>
                  <option value="education">Education</option>
                </select>
              </div>
              <div>
                <br></br>
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

export default EditCardForm;

