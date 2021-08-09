import React from 'react'

const Range = ({name, min, max, value, func}) => {

    return (
        <div >
            <label htmlFor="customRange1" className="form-label">{name}: {value}</label>
            <input type="range" className="form-range" id="customRange1" min={min} max={max} value={value} onChange={func} ></input>
        </div>
    )
}

export default Range
