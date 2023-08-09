import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const IngredientsDetails = () => {
  const { name } = useParams();

  const pizzaData = useSelector((state) => state.pizzas);
  const isTheSameName = (element) => {
    return element === name;
  };
  const pizzasWithIngredient = pizzaData.filter((elem) => {
    return elem.ingredients.some(isTheSameName);
  });

  return (
    <>
      <div>Pizze które zawierają wybrany składnik</div>
      <div>{name}</div>
      {pizzasWithIngredient.map((elem) => {
        return (
          <div key={elem.id}>
            <span>{elem.name}</span>
            <img src="" alt=" data obraz pizzy" />
          </div>
        );
      })}
    </>
  );
};
