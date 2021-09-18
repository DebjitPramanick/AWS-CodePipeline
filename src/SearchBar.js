import React from 'react'

const SearchBar = ({query, setQuery}) => {
    return (
        <div className="search-bar">
            <p>Search colors:</p>
            <input value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."></input>
        </div>
    )
}

export default SearchBar
