import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'


const AppBar = () => {
    const [ user, setUser ] = useState({ id: '', username: '' })
    const [ isLoggedIn, setIsLoggedIn ] = useState(false)
    const handleLogin = () => {
        setUser({ id: '1', user: 'colemanimhoff' })  // hardcoded for now
        setIsLoggedIn(true)
    }
    const handleLogout = () => {
        setUser({ id: '', username: '' })
        setIsLoggedIn(false)
    }

    console.log(user)

    const path = useLocation().pathname

    return (
        <div className="ui stackable menu">
            <Link className={path === '/' ? 'item active' : 'item'} to="/">
                <i className="music icon"></i>
            </Link>
            <Link className={path === '/albums' ? 'item active' : 'item'} to="/albums">
                Albums
            </Link>
            { isLoggedIn ? (
                <div className="right menu">
                    <Link className={path === 'albums/new' ? 'item active' : 'item'} to="/login">
                        Add Albums
                    </Link>
                    <Link className={path === '/logout' ? 'item active' : 'item'} onClick={handleLogout} to="/signup">
                        Log Out
                    </Link>
                </div>
            ) : (
                <div className="right menu">
                    <Link className={path === '/login' ? 'item active' : 'item'} onClick={handleLogin} to="/login">
                        Login
                    </Link>
                    <Link className={path === '/signup' ? 'item active' : 'item'} to="/signup">
                        Signup
                    </Link>
                </div>
            ) }
        </div>
    )
}

export default AppBar