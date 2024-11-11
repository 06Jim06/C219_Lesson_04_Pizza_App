import React from 'react';
import menu from './menu';
function Pizza({ name, description, imageUrl }) {
  return (
    <div className="pizza">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <button>Add To Cart</button>
    </div>
  );
}

function PizzaList() {
  return (
    <div className="pizzaL">
      {menu.map((pizza, index) => (
        <Pizza
          key={index}
          name={pizza.name}
          description={pizza.description}
          imageUrl={pizza.imageUrl}
        />
      ))}
    </div>
  );
}

export default PizzaList;