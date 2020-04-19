import React, { useState, useEffect } from 'react'

const AlbumSearch = () => {
    const [loading, setLoading] = useState(false)
    const [results, setResults] = useState([])
    const [query, setQuery] = useState('')
    
    useEffect(() => {
        if (query.trim() === '') {
            setResults([])
            return
        }

        setLoading(true)

        const perPage = 5
        const token = process.env.REACT_APP_TOKEN
        const headers = new Headers({
            'Authorization': `Discogs token=${token}`,
            'Content-Type': 'application/json',
            'User-Agent': 'YourBandSucks/2.0'
        })
        
        const url = `https://api.discogs.com/database/search?q=${query}&per_page=${perPage}`
        const options = {
            method: 'GET', 
            headers: headers
        }

        fetch(url, options)
            .then(res => res.json())
            .then(res => {
                setResults(res.results)
                setLoading(false)
                console.log(res)
            })
            .catch(err => console.log(err))
    }, [query])

    return (
        <>
            <div className="ui search">
                <div className="ui icon input album-search">
                    <input
                    autoComplete="off"
                    className="prompt"
                    onChange={(e) => setQuery(e.target.value)}
                    type="text"
                    tabIndex="0"
                    results={results}
                    value={query} />
                    <i aria-hidden="true" className="search icon"></i>
                </div>
            </div>
            {!loading && query.trim() === ""
                ? ([])
                : (
                    <div className="ui segment search-result">
                        {results.map(result => (
                            <div key={result.id} className="feed">
                                <div className="event">
                                    <div className="label">
                                        {result.thumb !== ''
                                            ? <img alt={result.title} className="ui tiny rounded image" src={result.cover_image} />
                                            : []   
                                        }
                                    </div>
                                    <div className="content">{result.title}.</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
        </>
    )
}

export default AlbumSearch