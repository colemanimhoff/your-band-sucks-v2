import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const AppBar = () => {
    const path = useLocation().pathname

      return (
        <div>
            <div className="ui stackable menu">
                <Link className={path === '/' ? 'item active' : 'item'} name="home" to="/">
                    <i className="music icon"></i>
                </Link>
                <Link className={path === '/albums' ? 'item active' : 'item'} name="albums" to="/albums">
                    Albums
                </Link>
                <div className="right menu">
                    <Link className={path === '/login' ? 'item active' : 'item'} name="login" to="/login">
                        Login
                    </Link>
                    <Link className={path === '/signup' ? 'item active' : 'item'} name="signup" to="/signup">
                        Signup
                    </Link>
                </div>
            </div>
        </div>
      )
}

export default AppBar