import React from "react";

const Form = () => {
    return(
        <form className="formu">
            <input name="name" type="text" className="feedback-input" placeholder="Nombre"/>
            <input name="email" type="text" className="feedback-input" placeholder="Email"/>
            <textarea name="text" className="feedback-input" placeholder="Contanos tu problema."></textarea>
            <input type="submit" value="SUBMIT" />
        </form>
    )
}

export default Form