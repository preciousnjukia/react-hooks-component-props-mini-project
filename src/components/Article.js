import React from "react";

function calculateReadingTimeEmojis(minutes) {
    let emojis = '';
  
    if (minutes < 30) {
      const coffeeCups = Math.ceil(minutes / 5);
      emojis = '☕️'.repeat(coffeeCups);
    } else {
      const bentoBoxes = Math.ceil(minutes / 10);
      emojis = '🍱'.repeat(bentoBoxes);
    }
  
    return emojis;
  }
  
  function Article({ title, date, preview, readingTime }) {
    
    const emojis = calculateReadingTimeEmojis(readingTime);
  
    return (
      <article>
        <h3>{title}</h3>
        <small>{date || 'January 1, 1970'}</small>
        <p>{preview}</p>
        <small>{emojis} {readingTime} min read</small>
      </article>
    );
  }

export default Article;