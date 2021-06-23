import React, { useState } from 'react';
import axios from 'axios';
import Form from './Form';
import CardList from './CardList';

function GitHubApp() {
  const [input, setInput] = useState('');
  const [data, setData] = useState([
    {
      id: 69316636,
      login: 'Abdulraheembashir043',
      avatar_url: 'https://avatars.githubusercontent.com/u/69316636?v=4',
      html_url: 'https://github.com/Abdulraheembashir043',
      location: 'Kaduna, Nigeria',
      name: 'BashDev',
    },
  ]);

  const handleChange = value => {
    setInput(value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const res = await axios(`https://api.github.com/users/${input}`);
    let result = res.data;
    setData(prevDatum => [...prevDatum, result]);
    setInput('');
  };

  return (
    <main>
      <h1>GitHub User Card App</h1>
      <Form onSubmit={handleSubmit} value={input} onChange={handleChange} />
      <CardList datas={data} />
    </main>
  );
}

export default GitHubApp;
