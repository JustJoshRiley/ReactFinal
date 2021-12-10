import React from "react";
import Like from "../Like/Like";
import './Band.css';

function Band(props) {
    const name = props.name;
    const formed = props.formed;
    const origin = props.origin;
    const split = props.split;
    const fans = props.fans;

    let notSplit = split === '-';

    return (
        <div className="BandComponent">
            <h1>{name}</h1>
            <h4> Date Formed: {formed}</h4>
            <p> Origin: {origin}</p>
            <p> Split Date: {split}</p>
            <p> Fans: {fans}</p>
            {notSplit && <Like></Like>}
        </div>
    )
}

export default Band;
