import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const QuizApp = () => {

    const {score ,correctAnswer} = useSelector(state=>state.quiz)
    

  const dispatch=useDispatch()


  return (
    <div>QuizApp
         <div className=' bg-slate-500 flex  items-center'>
      

      <h1>correct answer {correctAnswer}</h1>
      <h1>Score {score}</h1>

    

      

     </div>
    </div>
  )
}

export default QuizApp