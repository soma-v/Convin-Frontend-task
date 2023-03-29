import React, { useState } from 'react';
import Navbar from "./Navbar";
import Card from "./Card";
import CardForm from "./CardForm";
import './card.css';
import Addbucket from "./Addbucket";


function App() {
  const handleEdit = () => {
    console.log('Edit button clicked');
  }

  const handleDelete = () => {
    console.log('Delete button clicked');
  }

  const [cards, setCards] = useState({
    entertainment: [
      {
        title: 'Tarak Mehta ka Ulta Chasma',
        videoLink: 'https://www.youtube.com/embed/h2Vh60_G-2s',
        onEdit: handleEdit,
        onDelete: handleDelete
      },
      {
        title: 'Viral TikTok Dances',
        videoLink: 'https://www.youtube.com/embed/qRQIzyUfzQE',
        onEdit: handleEdit,
        onDelete: handleDelete
      }
    ],
    education: [
      {
        title: 'Cpp tutorial',
        videoLink: 'https://www.youtube.com/embed/ZzaPdXTrSb8',
        onEdit: handleEdit,
        onDelete: handleDelete
      },
      {
        title: 'Introduction to Quantum Mechanics',
        videoLink: 'https://www.youtube.com/embed/Usu9xZfabPM',
        onEdit: handleEdit,
        onDelete: handleDelete
      }
    ],
    sport: [
      {
        title: 'Amazing Football Goals',
        videoLink: 'https://www.youtube.com/embed/r_lN52VwrBo',
        onEdit: handleEdit,
        onDelete: handleDelete
      },
      {
        title: 'Olympic Gymnastics Highlights',
        videoLink: 'https://www.youtube.com/embed/JtSIoqqgpCA',
        onEdit: handleEdit,
        onDelete: handleDelete
      }
    ]
  });

  const handleAddCard = (category, title, videoLink) => {
    const newCard = {
      title: title,
      videoLink: videoLink,
      onEdit: handleEdit,
      onDelete: handleDelete
    };

    setCards(prevState => ({
      ...prevState,
      [category]: [...prevState[category], newCard]
    }));
    setShowForm(false);
    setCategoryToAddCard('');
  }

  const [showForm, setShowForm] = useState(false);
  const [categoryToAddCard, setCategoryToAddCard] = useState('');

  const handleAddCardClick = (category) => {
    setCategoryToAddCard(category);
    setShowForm(true);
  }

  return (
    <React.Fragment>
      <Navbar />
     
       <div className="App">
        <div className="card-container-vertical">
          <div className="merge">
         <div className="bucket-head"> <h2>Entertainment</h2></div>
         <div>
         <button onClick={() => handleAddCardClick('entertainment')} style={{ color: "white", background: "#29335c" ,width:"80px",height:"30px" }}>
            Add Card
          </button>
          </div>
          </div>
          <div className="class-row">
          {cards.entertainment.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              videoLink={card.videoLink}
              onEdit={card.onEdit}
              onDelete={card.onDelete}
            />
          ))}
          </div>
          
          
          {showForm && categoryToAddCard === 'entertainment' && (
            <CardForm
              category={categoryToAddCard}
              onAddCard={handleAddCard}
            />
          )}
        </div>

        <div className="card-container-vertical">
        <div className="merge">
         <div class="bucket-head"> <h2>Education</h2> </div>
         <div>
          <button onClick={() => handleAddCardClick('education')} style={{ color: "white", background: "#29335c" ,width:"80px",height:"30px"}}>
            Add Card
          </button>
          </div>
          </div>
          <div className="class-row">
          {cards.education.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              videoLink={card.videoLink}
              onEdit={card.onEdit}
              onDelete={card.onDelete}
            />
          ))}
         
          </div>
          {showForm && categoryToAddCard === 'education' && (
            <CardForm
              category={categoryToAddCard}
              onAddCard={handleAddCard}
            />
          )}
        </div>


        <div className="card-container-vertical">
          <div className="merge">
          <div class="bucket-head"> <h2>Sports</h2> </div>
          <div>
          <button onClick={() => handleAddCardClick('sport')} style={{ color: "white", background: "#29335c" ,width:"80px",height:"30px"}}>
            Add Card
          </button>
          </div>
          </div>
          <div className="class-row">
          {cards.sport.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              videoLink={card.videoLink}
              onEdit={card.onEdit}
              onDelete={card.onDelete}
            />
          ))}
          </div>
          
          {showForm && categoryToAddCard === 'sport' && (
            <CardForm
              category={categoryToAddCard}
              onAddCard={handleAddCard}
            />
          )}
        </div>
        </div>
      </React.Fragment>
  );
}
export default App;

