import React, { useState } from 'react';

function CardForm(props) {
  const [title, setTitle] = useState('');
  const [videoLink, setVideoLink] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleAddCard(props.category, title, videoLink);
    setTitle('');
    setVideoLink('');
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleVideoLinkChange = (event) => {
    setVideoLink(event.target.value);
  }

  const formStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 2px 6px rgba(0,0,0,0.1)',
  }

  const labelStyle = {
    display: 'block',
    marginBottom: '10px',
    fontWeight: 'bold',
    color: '#29335c',
  }

  const inputStyle = {
    padding: '8px',
    border: '1px solid #29335c',
    borderRadius: '4px',
    width: '100%',
    marginBottom: '20px',
    fontSize: '16px',
  }

  const buttonStyle = {
    backgroundColor: '#29335c',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  }

  return (
    <form  style={formStyle}>
      <label style={labelStyle}>
        Title:
        <input type="text" value={title} onChange={handleTitleChange} style={inputStyle} />
      </label>
      <label style={labelStyle}>
        Video Link:
        <input type="text" value={videoLink} onChange={handleVideoLinkChange} style={inputStyle} />
      </label>
      <input type="submit" value="Add Card" style={buttonStyle} />
    </form>
  );
}

export default CardForm;
