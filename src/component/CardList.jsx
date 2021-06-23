import React from 'react';
import Card from './Card';

function CardList({ datas }) {
  return (
    <div className='cardList'>
      {datas.map(data => {
        return <Card key={data.id} data={data} />;
      })}
    </div>
  );
}

export default CardList;
