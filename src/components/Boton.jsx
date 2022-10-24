import React from "react";

const Boton = ({clase, texto, href, aClass, onClick}) => {
    return(
        <button className={clase} onClick={onClick}>
            <a className={aClass} href={href} target="_blank">
                {texto}
            </a>
        </button>    
    )
}

export default Boton;