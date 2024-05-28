// quizSlice.js
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  
  score: 0,
  
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    // setCurrentQuizIndex(state, action) {
    //   state.currentQuizIndex = action.payload;
    // },
    setCorrectAnswer:(state,action)=>{
        state.correctAnswer=action.payload
        state.userAnswer=null

    },
    setCurrentQuestion(state, action) {
      state.currentQuestionIndex = action.payload;
      state.userAnswer=null
    },
    setUserAnswer(state, action) {
      // const { quizIndex, questionIndex, answer } = action.payload;
      // state.userAnswers[quizIndex] = {
      //   ...state.userAnswers[quizIndex],
      //   [questionIndex]: answer,
      // };

      state.userAnswer=action.payload
      
    },
    
    calculateScore(state) {
      // Logic to calculate score based on user's answers and update state.score
      let totalscore=0
      if(state.correctAnswer===state.userAnswer){
        totalscore++
        
      }
      state.score=totalscore
      
    },
   
  },
});

export const { setCurrentQuizIndex, setCurrentQuestion, setUserAnswer, calculateScore,fetchData ,setCorrectAnswer} = quizSlice.actions;
export default quizSlice.reducer;