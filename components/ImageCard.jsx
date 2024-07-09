import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ImageCard = ({ imageUrl }) => {
  const styles = {
    cardContainer: {
      position: 'relative',
      display: 'inline-block',
    },
    image: {
      width: '300px',
      height: '200px',
      objectFit: 'cover',
    },
    button: {
      position: 'absolute',
      bottom: '10px',
      right: '10px',
      backgroundColor: 'white',
      border: 'none',
      borderRadius: '50%',
      padding: '10px',
      cursor: 'pointer',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    },
    icon: {
      color: 'red',
    },
  };

  return (
    <div style={styles.cardContainer}>
      <img src={imageUrl} alt="Card Image" style={styles.image} />
      <button style={styles.button}>
        <i className="fas fa-heart" style={styles.icon}></i>
      </button>
    </div>
  );
};

export default ImageCard;
