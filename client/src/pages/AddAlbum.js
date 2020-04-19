import React, { useState, useEffect } from 'react'

import AppBar from '../components/AppBar'

const AddAlbum = () => {
    const [results, setResults] = useState([])
    
    useEffect(() => {
        const perPage = 10
        const token = process.env.REACT_APP_TOKEN
        const query = 'come%20to%20my%20party'
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Discogs token=${token}`,
            'User-Agent': 'YourBandSucks/2.0'
        })

        fetch(`https://api.discogs.com/database/search?q=${query}&per_page=${10}`, { method: 'GET', mode: 'cors', headers: headers })
            .then(res => res.json())
            .then(res => {
                setResults(res.results)
            })
            .catch(err => console.log(err))

        
    }, [])
    return (
        <>
            <AppBar />
            {results.map(result => <p key={result.id}>{result.title}</p>)}
        </>
    )
}

export default AddAlbum