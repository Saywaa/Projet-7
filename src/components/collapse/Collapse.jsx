import React, { useState } from "react";

function Collapse ({ content, title }) {
    const [isOpen, setIsOpen] = useState(false);
    const display = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            <div>
                <h2>{title}</h2>
                <p onClick={display}>
                    {isOpen ? (<i></i>) : (<i></i>)}
                </p>
            </div>
            {}
            <div>
                {isOpen && <p>{content}</p>}
            </div>
        </div>
    )
}

export default Collapse;