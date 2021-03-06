import React from 'react'

function ImageSelector({ handleSelection }) {
    const amount = ["wildflower", "indian", "almond"];

    return (
        <div style={{display: "flex", border: "1px solid white", marginTop: 30}}>
            {amount.map((item, i) => (
                <div 
                    key={i} 
                    style={{height: 100, width: 170, backgroundColor: "white", marginRight: 10, cursor: "pointer"}}
                    onClick={() => handleSelection(item)}
                >
                    item
                </div>
            ))}
        </div>
    )
}

export default ImageSelector
