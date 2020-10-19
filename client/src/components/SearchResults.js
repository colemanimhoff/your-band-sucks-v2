import React, { useContext } from 'react'

import addAlbumContext from '../context/AddAlbumContext'

const SearchResults = () => {
  const context = useContext(addAlbumContext)
  const results = []
  return (
    <>
      {results.length > 0
        ? (
          <div className="ui segment search-results">
            {results.map(result => (
              <div
                key={result.id}
                className="ui event rounded search-result"
                onClick={() => context.setAlbum(result)}>
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
      }}
    </>
  )
}

export default SearchResults
