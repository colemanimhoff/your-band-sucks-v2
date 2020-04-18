import React from 'react'
import { Link, useLocation } from 'react-router-dom'


const AppBar = () => {
    const path = useLocation().pathname

    return (
        <div className="ui stackable menu">
            <Link className={path === '/' ? 'item active' : 'item'} to="/">
                <i className="music icon"></i>
            </Link>
            <Link className={path === '/albums' ? 'item active' : 'item'} to="/albums">
                Albums
            </Link>
                <div className="right menu">
                    <Link className={path === '/login' ? 'item active' : 'item'} to="/login">
                        Login
                    </Link>
                    <Link className={path === '/signup' ? 'item active' : 'item'} to="/signup">
                        Signup
                    </Link>
                </div>
            )
        </div>
    )
}

export default AppBar