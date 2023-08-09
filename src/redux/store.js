import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";

// Początkowa wartość statusu Redux dla Reducera root,
// jeżeli nie przekaże się parametru preloadedState.

// Tymczasem wykorzystujemy reducer, który
// zwraca tylko otrzymany status
export const store = configureStore({
  reducer: rootReducer,
});
