import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    darkMode:true,

}

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    ENABLE_DARK:(state)=>{
        state.darkMode=true;


    },
    DISABLE_DARK:(state)=>{
        state.darkMode=false;
    }

  }
});

export const {ENABLE_DARK,DISABLE_DARK} = darkModeSlice.actions

export default darkModeSlice.reducer