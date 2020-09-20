import React, { useState, useEffect } from 'react';
import './App.css';

function App () {
  const [comments, setComments] = useState(null);
  useEffect(function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      // Limit the comments to the first 5 responses
      .then(json => json.slice(0, 5))
      // Wait 1 second before displaying the data
      .then((json) => {
        setTimeout(() => {
          setComments(json);
        }, 1000)
      })
  });

  if (!comments) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <ul>
      {comments.map(function (comment, index) {
        const {id, title, body} = comment;

        return (
          <li key = {index}>
            <p>{`${id}: ${title}`}</p>
            <p>{body}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default App;
