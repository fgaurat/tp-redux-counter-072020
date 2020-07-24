import React from 'react'

export const Counter = (props) => {

    const cpt = props.cpt

    return (
        <div>
                <button onClick={props.inc}>Inc</button>
                <button onClick={props.dec}>Dec</button>
                <br/>
                {cpt}
        </div>
    )
}
