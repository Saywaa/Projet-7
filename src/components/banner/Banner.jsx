import React from "react";

function Banner({ image, text }) {
    return (
        <div>
            <img src={image} alt="Bannière" />
            <div></div>
            <span>{text}</span>
        </div>
    )
}

export default Banner;