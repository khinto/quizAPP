import { useDispatch, useSelector } from 'react-redux';
import { ENABLE_DARK,DISABLE_DARK } from '../redux/darkModeSlice';
import { useState } from 'react';

const ToggleButton = () => {
    
    const darkMode = useSelector(state => state.darkMode);
    const[dark,setDark]=useState(false)
    const dispatch = useDispatch();
    
  const toggleDarkMode = () => {
    setDark(!dark);
    if (dark) {
      dispatch(ENABLE_DARK());
    } else {
      dispatch(DISABLE_DARK());
    }
  }

    return (
        <>

            <label className="toggle-switch">
                <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={toggleDarkMode}
                />
                <span className="slider"></span>
            </label>
       
        </>
    )
}

export default ToggleButton