import React, { useEffect, useState } from 'react'
import data from './data.json'
import { useLocation } from 'react-router-dom';
export const useData = () => {


    const pathName=useLocation().pathname.slice(1);
    const quiz=data.quizzes.find(quiz => quiz.title === pathName) //to get title and icons
    const QuizQuestions = quiz.questions; // to get questions and asnwers



    
    


      return {data,QuizQuestions,quiz} || [];

}

