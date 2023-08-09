import { nanoid } from "nanoid";
export const addOperationToPizza = (nazwapizzy, typOperacji, skladnik) => {
  return {
    type: "operationForPizza/addOperation",
    payload: {
      id: nanoid(),
      nazwapizzy: nazwapizzy,
      typOperacji: typOperacji,
      skladnik: skladnik,
    },
  };
};
export const addOperationToIngredient = (nazwapizzy, typOperacji, skladnik) => {
  return {
    type: "operationForIngredient/addOperation",
    payload: {
      id: nanoid(),
      nazwapizzy: nazwapizzy,
      typOperacji: typOperacji,
      skladnik: skladnik,
    },
  };
};

export const addModifyPizza = (nazwapizzy, typOperacji, skladnik) => {
  return {
    type: "operationforYOurPizza/addYourPizza",
    payload: {
      id: nanoid(),
      nazwapizzy: nazwapizzy,
      typOperacji: typOperacji,
      skladnik: skladnik,
    },
  };
};
export const deleteIngredientFromPizza = (
  nazwapizzy,
  typOperacji,
  skladnik
) => {
  return {
    type: "operationforYOurPizza/removeIngredient",
    payload: {
      id: nanoid(),
      nazwapizzy: nazwapizzy,
      typOperacji: typOperacji,
      skladnik: skladnik,
    },
  };
};
export const orderPizza = (nazwaPizzy) => {
  return {
    type: "operationforYOurPizza/OrderPizza",
    payload: {
      nazwaPizzy: nazwaPizzy,
    },
  };
};
