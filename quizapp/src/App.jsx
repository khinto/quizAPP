import { useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css'
import Quiz from './components/quiz/Quiz'
import Home from './components/home/Home'
import { useDispatch, useSelector } from 'react-redux'
import QuizApp from './components/quiz/QuizApp'



function App() {

  const {darkMode}=useSelector(state=>state.darkMode)
  

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
 {console.log(darkMode)}

   <BrowserRouter>
   
   
    

    <Routes>
    <Route path='/' element={<Home/>}>Html</Route>
      <Route path='/Html' element={<Quiz/>}>Html</Route>
      <Route path='/CSS' element={<Quiz/>}>CSS</Route>
      <Route path='/Javascript' element={<Quiz/>}>Javascript</Route>
      <Route path='/Accessibility' element={<Quiz/>}>Accessibility</Route>
      <Route path='/result' element={<QuizApp/>}>Accessibility</Route>

    </Routes>

    

    </BrowserRouter>  
    </div>
   
    

    
      
       
   
  )
}

export default App
