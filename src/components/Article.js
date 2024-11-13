import React from 'react';

function Article({ title, date, preview, minutesToRead }) {
  const calculateReadTime = (minutes) => {
    let emojis = '';
    if (minutes < 30) {
      emojis = '☕️'.repeat(Math.ceil(minutes / 5));
    } else {
      emojis = '🍱'.repeat(Math.ceil(minutes / 10));
    }
    return `${emojis} ${minutes} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || 'January 1, 1970'}</small>
      <p>{preview}</p>
      <p>{calculateReadTime(minutesToRead)}</p>
    </article>
  );
}

export default Article;
