import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export const PizzasList = () => {
  //funkcja do zmiany strony na pizze ze skladnikami

  let navigate = useNavigate();
  const routeChange = (elemId) => {
    let path = `/pizzaDetails/` + elemId;
    navigate(path);
  };

  const pizzas = useSelector((state) => state.pizzas);
  return pizzas.map((elem) => {
    return (
      <div key={elem.id}>
        <button onClick={() => routeChange(elem.id)}>
          <span>{elem.name}</span>
          <img src="" alt=" data obraz pizzy" />
        </button>
      </div>
    );
  });
};
