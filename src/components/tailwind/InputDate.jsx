import React, { useState } from "react";

export default function InputDate({datelabel})
{
    return(
        <>
        <div className="text-gray-700 text-sm w-32 h-6">
            {datelabel}
        </div>
        
        <input
            type="date"
            className="w-full px-4 py-2" /* Consultar documentação tailwind */
        />
        </>
    );
} 