import React, { useContext }  from 'react';
import Navbar from './Navbar';
import Body from './body';
import { themeContext } from './themeContext';

const MainApp = () => {
    const { islight } = useContext(themeContext);
    return (
        <div className={`App ${islight ? 'dark' : 'light'}`}>
            <Navbar />
            <div className='body'>
            <Body />
            </div>
        </div>
    )
}

export default MainApp
