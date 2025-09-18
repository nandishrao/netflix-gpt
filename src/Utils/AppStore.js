import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieSlice from "./movies-slice"
import gptReducer from "./GptSlice"


const Appstore = configureStore ({
        reducer: {
            user:userReducer,
            movies:movieSlice, 
            gpt:gptReducer,
        },
    })


export default Appstore