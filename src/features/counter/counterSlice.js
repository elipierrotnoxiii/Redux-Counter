import { createSlice } from "@reduxjs/toolkit"; // para poder crear el slice para el cambio del state

// Estado inicial del contador
const initialState = {
  count: 0,
};

// usaremos esta funcion para poder hacer el cambio del estado inicial
export const counterSlice = createSlice({
  // nombre con el que lo llamaremos
  name: "counter",
  // Estado inicial con el que empieza la app
  initialState,
  // Los reducers son las actions que cambiaran el estado principal de la app
  reducers: {
    // Funcion o "actions" para incrementar el valor del contador y resive como parametro "state"
    increment: (state) => {
      // usamos state con count que esta definido en el initialState
      state.count += 1;
    },
    // Funcion o "action" para reducir el valor
    decrement: (state) => {
      state.count -= 1;
    },
    // Funcion que reseteara el contador
    reset: (state) => {
      state.count = 0;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

//Exportamos las actions dentro de Reducers
export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;

// Exportamos el Reducer
export default counterSlice.reducer;
