import React, { useState, useEffect } from 'react'

const AlbumSearch = ({ setAlbum }) => {
    const [loading, setLoading] = useState(false)
    const [results, setResults] = useState([])
    const [query, setQuery] = useState('')

    useEffect(() => {
        if (query.trim() === '') {
            setResults([])
            return
        }

        setLoading(true)

        const throttledSearch = () => {
            const perPage = 20
            const token = process.env.REACT_APP_TOKEN
            const headers = new Headers({
                'Authorization': `Discogs token=${token}`,
                'Content-Type': 'application/json',
                'User-Agent': 'YourBandSucks/2.0'
            })

            const proxyurl = "https://cors-anywhere.herokuapp.com/"
            const url = `https://api.discogs.com/database/search?q=${query}&per_page=${perPage}&type=release`
            const options = {
                method: 'GET',
                mode: 'cors',
                headers: headers
            }

            fetch(proxyurl + url, options)
                .then(res => res.json())
                .then(res => {
                    setResults(res.results)
                    setLoading(false)
                })
                .catch(err => console.log(err))
        }

        const interval = setTimeout(throttledSearch, 300)

        return () => clearInterval(interval)
    }, [query])

    return (
        <>
            <div className="ui icon input album-search">
                <input
                    autoComplete="off"
                    className="prompt"
                    placeholder="Enter album name"
                    onChange={(e) => setTimeout(setQuery(e.target.value), 500)}
                    results={results}
                    type="text"
                    tabIndex="0"
                    value={query} />
                <i aria-hidden="true" className="search icon"></i>
            </div>
            {loading
                ? (
                    <div className="ui segment">
                        <div className="event search-result">
                            <div className="ui active centered inline loader"></div>
                        </div>
                    </div>
                )
                : results.length > 0
                    ? (
                        <div className="ui segment search-results">
                            {results.map(result => (
                                <div
                                    key={result.id}
                                    className="ui event rounded search-result"
                                    onClick={() => setAlbum(result)}>
                                    <div className="ui card fluid search-result">
                                        {result.cover !== ''
                                            ? <img alt={result.title} className="ui tiny rounded image search-result-image" src={result.cover_image} />
                                            : []
                                        }
                                    </div>
                                    <div className="search-result-content">
                                        <div className="text search-result-title">Title - {result.title}</div>
                                        <div className="text">Year: {result.year}</div>
                                        <div className="text"> Genre: {result.genre.map(g => g + ' ')}</div>
                                        <a
                                            href={`https://www.discogs.com/${result.uri}`}
                                            rel="noopener noreferrer"
                                            target="_blank">
                                            <i className="ui external alternate icon"></i>
                                            View on Discogs
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                    : ([])
            }
        </>
    )
}

export default AlbumSearch