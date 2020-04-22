import React, { useReducer } from 'react'

import AddAlbumContext from '../context/AddAlbumContext'
import AddAlbumReducer from '../context/AddAlbumReducer'

import { SET_ALBUM } from '../context/Types'

import AppBar from '../components/AppBar'
import SearchBar from '../components/SearchBar'

const AddAlbum = () => {
    const [state, dispatch] = useReducer(AddAlbumReducer, {
        album: {}
    })

    const setAlbum = album => dispatch({
        type: SET_ALBUM,
        payload: album
    })

    return (
        <>
            <AppBar />
            <AddAlbumContext.Provider value={{
                state: state,
                setAlbum
            }}>
                <div className="ui container">
                    <h1 className="page-title">Add Album</h1>
                    <div className="ui grid" columns={2}>
                        <div className="eight wide column">
                            <SearchBar />
                        </div>
                        <div className="eight wide column">
                            {state.album.cover_image
                                ? (
                                    <img alt={state.album.title} src={state.album.cover_image} className="ui large bordered image right floated" />
                                )
                                : (
                                    []
                                )
                            }
                        </div>
                    </div>
                </div>
            </AddAlbumContext.Provider>
        </>
    )
}

export default AddAlbum