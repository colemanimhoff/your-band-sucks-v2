import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AppBar = () => {
    const [ activeItem, setActiveItem ] = useState('home')
    const handleClick = (e) => setActiveItem(e.target.name)

      return (
        <div>
            <div className="ui stackable menu">
                <Link className={`item ${activeItem === 'home' ? 'active' : ''}`} name="home" onClick={handleClick} to="/">
                    <i className="music icon"></i>
                </Link>
                <Link className={`item ${activeItem === 'albums' ? 'active' : ''}`} name="albums" onClick={handleClick} to="/albums">
                    Albums
                </Link>
                <div className="right menu">
                    <Link className={`item ${activeItem === 'login' ? 'active' : ''}`} name="login" onClick={handleClick} to="/login">
                        Login
                    </Link>
                </div>
            </div>
        </div>
      )
}

export default AppBar