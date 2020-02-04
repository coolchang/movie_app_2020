import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image:
      'https://www.koreanbapsang.com/wp-content/uploads/2016/10/DSC_1843-e1477360668451.jpg',
  },
  {
    id: 2,
    name: 'Samgyebsal',
    image:
      'https://i0.wp.com/www.gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-4.jpg?w=600&ssl=1',
  },
  {
    id: 3,
    name: 'Naengmyeon',
    image:
      'https://www.maangchi.com/wp-content/uploads/2008/06/bibim-naengmyeon-590x394.jpg',
  },
];

function Food({ name, picture }) {
  return (
    <div>
      <h2> I like {name} </h2>
      <img src={picture} alt={name} />
    </div>
  );
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
