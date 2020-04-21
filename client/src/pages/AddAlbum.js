import React, { useState } from 'react'

import AppBar from '../components/AppBar'
import AlbumSearch from '../components/AlbumSearch'

const AddAlbum = () => {
    const [album, setAlbum] = useState({})
    return (
        <>
            <AppBar />
            <div className="ui container">
                <h1 className="page-title">Add Album</h1>
                <div className="ui grid" columns={2}>
                    <div className="eight wide column">
                        <AlbumSearch setAlbum={setAlbum}/>
                    </div>
                    <div className="eight wide column">
                        {album.cover_image
                            ? (
                                <img alt={album.title} src={album.cover_image} className="ui large bordered image right floated" />
                            )
                            : (
                                []
                            )
                        } 
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddAlbum