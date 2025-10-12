import React, { useState } from "react";
import InputText from "./InputText";

export default function List({prop}){
    const [list, setlist] = useState(["Brasil", "Bolívia", "México", "Argentina", "Colômbia", "Peru", "Chile", "Uruguai", "Paraguai", "Equador"]);
    const [show, setShow] = useState(false);

    function handleClick(){
        setShow(prev => !prev);
    }

    return(
        <>
            <InputText placeholder="Países" onFocus={handleClick} onBlur={handleClick}> </InputText>
            {show && (
                <div>
                    {list.map(
                        (item, index) => (
                            <button type="button" key={index} className="border border-gray-300 rounded px-4 py-2 w-64 text-left bg-white shadow-sm">
                                {item}
                            </button>
                        )
                    )}
                </div>
            )}
        </>
    )
}
