import React from 'react';

function Card({ data }) {
  return (
    <div className='card'>
      <img src={data.avatar_url} alt={data.name} />
      <p>
        <span>Name:</span> {data.name}
      </p>
      <p>
        <span>Location:</span> {data.location}
      </p>
      <p>
        <span>Repository:</span>{' '}
        <a href={data.html_url} target='_blank' rel='noopener noreferrer'>
          Go to Repo
        </a>
      </p>
    </div>
  );
}

export default Card;
