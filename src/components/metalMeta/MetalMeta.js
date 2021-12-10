import React from "react";
import data from "../../metal.json";
import Band from "../Band/Band";
import './MetalMeta.css';

function MetalMeta() {
    // first 50 bands
    const first_50 = data.slice(0, 50)

    const band = first_50.map((band) => {

        const name = band.band_name;
        const formed = band.formed;
        const origin = band.origin;
        const split = band.split;
        const fans = band.fans;

        return (
            <Band
                name={name}
                formed={formed}
                origin={origin}
                split={split}
                fans={fans}
            />
        )
    })


    return (
        <div className="MetalMetaContainer">
            <h4>Total Number of Bands: {first_50.length}</h4>
            <div className="BandContainer">
                {band}
            </div>
        </div>
    )
}

export default MetalMeta;
