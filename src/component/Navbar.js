import React, { useContext } from 'react'
import { themeContext } from './themeContext'

const Navbar = () => {
    const { themeToggle } = useContext(themeContext);

    return (
        <div className='navbar'>
            <div className='navtitle'><h2>this is navbar</h2></div>
            <div className='darkToggle'>
            <label className="switch">
                <input type="checkbox" onChange={themeToggle}/>
                <span className="slider round"></span>
            </label>

            </div>
        </div>
    )
}

export default Navbar
