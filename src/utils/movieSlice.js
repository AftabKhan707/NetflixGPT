import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    playingMovies: null,
    upcomingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.playingMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});
export const { addMovies, addTrailerVideo, addUpComingMovies } =
  movieSlice.actions;
export default movieSlice.reducer;
