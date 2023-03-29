import React, { useState } from "react";
import "./Form.css"; // import the custom CSS file for styling

function Addbucket() {
  const [bucketName, setBucketName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Bucket Name: ${bucketName}`);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="bucket-name" className="form__label">
        Bucket Name
      </label>
      <input
        id="bucket-name"
        className="form__input"
        type="text"
        value={bucketName}
        onChange={(e) => setBucketName(e.target.value)}
      />
      <button type="submit" className="form__button">
        Submit
      </button>
    </form>
  );
}

export default Addbucket;
