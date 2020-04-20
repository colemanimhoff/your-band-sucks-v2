import React from 'react'

import AppBar from '../components/AppBar'
import AlbumSearch from '../components/AlbumSearch'

const AddAlbum = () => {
    return (
        <>
            <AppBar />
            <div className="ui container">
                <h1 className="page-title">Add Album</h1>
                <div className="ui grid" columns={2}>
                    <div className="eight wide column">
                        <AlbumSearch />
                    </div>
                    <div className="eight wide column">
                        <p className="text">Album choice goes here...</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddAlbum