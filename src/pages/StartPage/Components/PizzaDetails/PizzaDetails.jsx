import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addOperationToPizza } from "../../../../redux/actions";
import { addModifyPizza } from "../../../../redux/actions";
import { deleteIngredientFromPizza } from "../../../../redux/actions";
import { orderPizza } from "../../../../redux/actions";

export const PizzaDetails = (pizza) => {
  const pizzaData = useSelector((state) => state.pizzas);
  const listaWszyskichSkladnikow = useSelector((state) => state.ingredients);

  const { Id } = useParams();
  const getPizzaData = (Id) => {
    return pizzaData.filter((elem) => elem.id === Number(Id));
  };

  const SelectedPizza = getPizzaData(Id);
  const dispatch = useDispatch();

  function dodajSkladnik(nazwapizzy, typOperacji, skladnik) {
    dispatch(addModifyPizza(nazwapizzy, typOperacji, skladnik));
    dispatch(addOperationToPizza(nazwapizzy, typOperacji, skladnik));
  }
  function usunSkladnik(nazwapizzy, typOperacji, skladnik) {
    dispatch(addOperationToPizza(nazwapizzy, typOperacji, skladnik));
    dispatch(deleteIngredientFromPizza(nazwapizzy, typOperacji, skladnik));
  }

  function orderPizza2(nazwapizzy) {
    dispatch(orderPizza(nazwapizzy));
  }

  return (
    <div key={pizza.id}>
      <div>
        <p>Nazwa: {SelectedPizza[0].name} </p>
        <img src="" alt=" data obraz pizzy" />
      </div>
      <div>
        {SelectedPizza[0].ingredients.map((elem) => (
          <div>
            <span>{elem}</span>
          </div>
        ))}
        <div>
          <p>Wszyskie składniki</p>
          {listaWszyskichSkladnikow.map((elem) => (
            <div>
              <span>{elem}</span>
              <button
                onClick={() => {
                  dodajSkladnik(SelectedPizza[0].name, "dodaj", elem);
                }}
              >
                dodaj
              </button>
              <button
                onClick={() => {
                  usunSkladnik(SelectedPizza[0].name, "usun", elem);
                }}
              >
                usun
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            orderPizza2(SelectedPizza[0].name);
          }}
        >
          Zamów taką pizze{" "}
        </button>
      </div>
    </div>
  );
};
