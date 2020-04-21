import React from 'react'

import AppBar from '../components/AppBar'

const Home = () => {
    return (
        <>
            <AppBar />
            <div className="ui container">
                <h1 className="main-title">
                    <div>
                        <span>YOUR </span>
                        <span>BAND </span>
                    </div>
                    <span>S</span>
                    <span className="flickering">U</span>
                    <span>CKS</span>
                </h1>
            </div>
        </>
    )
}

export default Home