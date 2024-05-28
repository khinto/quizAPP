
import React, { useState } from 'react'
import {Link} from 'react-router-dom'


import Quiz from '../quiz/Quiz';
import ToggleButton from '../Togglebutton';
import { useDispatch } from 'react-redux';
import { fetchData } from '../../redux/quizSlice';



const Home = () => {
  const dispatch=useDispatch()
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const[category,setCategoty]=useState(null)


  return (
    <div className='dark:bg-slate-800'>
               <div >
                
                <ToggleButton/>
               </div>
              

    <div className=' justify-around flex  w-[1000px]  h-[500px]  mx-auto m-10 p-10 ' >
   
      
      
        <div className='w-[40%] '>
            <div>
              <p className='text-[3rem]'>Welcome to the <span className=' text-[3rem]'>Frontend Quiz</span></p>
              
            </div>
            <div className='my-20'>
                <p>pick a subject to get started</p>
            </div>
            
        </div>

        <div className='flex flex-col    items-center'>
           
          <Link className='title' to="HTML" >HTML</Link>
          <Link className='title' to="CSS" >CSS</Link>
          <Link  className='title'to="Javascript" >Javascript</Link>
          <Link  className='title'to="Accessibility" >Accessibility</Link>

        </div>
    </div>
    

    
    
    </div>
  )
}

export default Home