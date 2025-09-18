import { createSlice } from "@reduxjs/toolkit";

const GptSlice =createSlice({ name:"gpt",
    initialState:{ 
        showGptSearch:false,
        movieNames:[],
        movieResults: [],
 },
    reducers:{
        toggelGptSearchView :(state , action)=>{
            state.showGptSearch=!state.showGptSearch
        },
        addGeminiMovie :(state , action)=>{
            const {movieNames ,movieResults}=action.payload;
            state.movieNames =movieNames;
            state.movieResults =movieResults;
        }
    }

   }

)
export const { toggelGptSearchView , addGeminiMovie} =GptSlice.actions
export default GptSlice.reducer;