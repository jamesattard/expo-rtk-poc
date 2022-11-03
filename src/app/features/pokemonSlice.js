import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
});

export default pokemonSlice.reducer;
