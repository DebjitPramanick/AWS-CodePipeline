import React from 'react'

const ColorsBox = ({colors}) => {

    return (
        <div className="colors-container">
            {colors.map(c => (
                <div className="color" key={c.id} style={{background: `${c.color}`}}></div>
            ))}
        </div>
    )
}

export default ColorsBox
