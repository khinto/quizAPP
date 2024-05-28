import React, { useEffect, useState } from 'react'
import { useData } from '../../hooks/useData'

import { useDispatch, useSelector } from 'react-redux'
import { setCorrectAnswer,setCurrentQuestion,setUserAnswer,calculateScore  } from '../../redux/quizSlice';
import QuizApp from './QuizApp';

const Quiz = () => {

   
   const {score ,correctAnswern} = useSelector(state=>state.quiz)
    

   const{QuizQuestions,quiz}=useData();

   const dispatch=useDispatch()
  


 const [indexp,setIndexp]=useState(1)


 const handleClick =()=>{
  setIndexp(indexp+1)
  dispatch(calculateScore());
  
 }

 const userAnswer=(option)=>{
  dispatch(setUserAnswer(option))
  

 }







 useEffect(() => {
  if (quiz && quiz.questions && quiz.questions[indexp]) {
   
    dispatch(setCorrectAnswer(QuizQuestions[indexp].answer));
    dispatch(setCurrentQuestion(QuizQuestions[indexp].question))
  }
}, [indexp, quiz, dispatch])


  return (
    <div>
     <div className=' bg-slate-500 flex  items-center'>
      
      

      <div className='px-5'><img src={quiz.icon} alt=''/></div>
      <h1 className='text-xl'>{quiz.title}</h1>
      <h1>{indexp}</h1>
      
      


      

     </div>

    {QuizQuestions.map((question,index)=>
      {
        
        
        if(index===indexp){
          

         return <div key={index} className='  justify-around flex  w-[1000px]  h-[500px]  mx-auto m-10 p-10' >
          <div className='w-[40%] '>
           
          

          <h3 className='text-[2rem]'>{question.question}</h3>

          </div>
         
          
         <div className='flex flex-col    items-center'>
          
          {question.options.map((option, optionIndex) => (
             <div className='title' onClick={()=>userAnswer(option)} key={optionIndex}>{option}  </div>
            ))}
            <button onClick={handleClick} className=' bg-slate-500 w-60 h-24 '>Submit Answer</button>
          



          </div>
           
          
         

        </div>
        }
      }
       
      )}  
      <QuizApp/>
     
    
    </div>
    
  )
}

export default Quiz