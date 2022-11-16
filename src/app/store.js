import { configureStore } from "@reduxjs/toolkit"; // se llama para poder configurar la store
import counterReducer from "../features/counter/counterSlice";

// Sirve para almacenar todos los reducers de los diferentes slice de la app
export const store = configureStore({
  reducer: {
    // llamamos a counterReducer para llamar a las dos actions y ahorrar espacio
    counter: counterReducer,
  },
});
