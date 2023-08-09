import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export const IngredientsList = () => {
  //funkcja do zmiany strony na pizze ze skladnikami

  let navigate = useNavigate();
  const routeChange = (elem) => {
    let path = `IngredientDetails/` + elem;
    navigate(path);
  };

  const ingredients = useSelector((state) => state.ingredients);
  return (
    <>
      <p>SPRAWDZ KTÓRA PIZZA ZAWIERA TWOJ ULUBIONY SKŁADNIK</p>
      {ingredients.map((elem) => {
        return (
          <div key={elem.id}>
            <button onClick={() => routeChange(elem)}>
              <span>{elem}</span>
            </button>
          </div>
        );
      })}
    </>
  );
};
