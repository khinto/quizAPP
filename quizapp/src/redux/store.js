import { configureStore } from '@reduxjs/toolkit'
import quizReducer from './quizSlice'
import darkModeReducer from './darkModeSlice'

export const store = configureStore({
    reducer: {
        quiz:quizReducer,
        darkMode:darkModeReducer,
    
    },
  })