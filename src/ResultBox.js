import React from 'react'

const ResultBox = ({ results }) => {
    return (
        <div className="results-container">
            {results.length > 0 ? results.map(r => (
                <div className="color" key={r.id} style={{ background: `${r.color}` }}></div>
            )) : <p>No Results...</p>}
        </div>
    )
}

export default ResultBox
