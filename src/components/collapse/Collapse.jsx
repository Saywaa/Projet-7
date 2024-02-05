import React, { useState } from "react";

function Collapse ({ content, title }) {
    const [isOpen, setIsOpen] = useState(false);
    const display = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            <div className="collapse__dropdown__title">
                <h2>{title}</h2>
                <p onClick={display}>
                    {isOpen ? (<i className="fa-solid fa-chevron-up"></i>) : (<i className="fa-solid fa-chevron-down"></i>)}
                </p>
            </div>
            {}
            <div className="collapse__dropdown__content">
                {isOpen && <p>{content}</p>}
            </div>
        </div>
    )
}

export default Collapse;