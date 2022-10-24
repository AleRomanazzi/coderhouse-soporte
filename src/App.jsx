
import Boton from "./components/Boton";
import Imagen from "./components/Imagen"
import Formulario from "./components/Formulario"
import {useState} from "react"
import logo1 from "./images/coderhouse-logo2-amarillo.png"

function App() {
  const [formVisible, setFormVisible] = useState(false)

  function handleClick(params) {
    setFormVisible(true)
  }

  return(
    <>
    <div>
      <div>
        <div className="principal">
          <h1>BIENVENID@ AL SOPORTE DE</h1>
          <img src={logo1} width="400"></img>
        </div>
        <h3>Acerca de esta sección</h3>
        <p>Usuario de Coderhouse, esta sección de soporte atiende a inquietudes y problemáticas por fuera del material y del cursado en sí.<br></br>
        Te ofrecemos diferentes métodos de contacto para que puedas solucionar lo tuyo!
        </p>
        <div className="center w-70">
          <Boton clase="btn btn-warning m-2 fs-4" texto="Solicitar soporte vía e-mail" aClass="withoutLine" href="mailto:it@coderhouse.com?Subject=Ayuda%20-%20Soporte%20de%20Coderhouse"></Boton>
          <Boton clase= "btn btn-success m-2 fs-4" texto="Solicitar soporte vía Whatsapp" href="https://api.whatsapp.com/send/?phone=5492215137609&text&type=phone_number&app_absent=0" aClass="withoutLine"></Boton>
          <Boton clase= "btn btn-secondary m-2 fs-4" texto="Reportar problema en plataforma" onClick={handleClick} aClass="withoutLine"></Boton>
        </div>
      </div>
      <div className="formu">
        {formVisible ? <Formulario/> : null}
      </div>
    </div>
    </>
  )
}

export default App
