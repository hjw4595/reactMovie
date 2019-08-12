import React from 'react';
import PropTypes from 'prop-types';

const lists = [
  {
    id: "1",
    name: "일",
    rating: 5,
  },
  {
    id: "2",
    name: "이",
    rating: 4,
  },
  {
    id: "3",
    name: "삼",
    rating: 4,
  }
  , {
    id: "4",
    name: "사",
    rating: 5,
  },
  {
    id: "5",
    name: "오",
    rating: 3,
  }
];

function RenderLists({name, rating}){
  return (
    <div>
      <h1>{name}</h1>
      <h2>{name} is  {rating}</h2> 
    </div>
  );
}
RenderLists.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number
};
function App() {
  return (
    <div>
      {lists.map(list => (
        <RenderLists
          key={list.id}
          name={list.name}
          rating={list.rating}
        />
      ))}
    </div>
  );
}

export default App;
