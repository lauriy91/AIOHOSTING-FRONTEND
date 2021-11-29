import labelIdioma from "./labelIdioma.css"

export const LabelIdioma = () => {
    return (
        <div class="banner">
        <div class="col s8">
    
          <router-link to="/FiltroEspañol">
            <span id="textoIdioma"> Español </span>
          </router-link>
    
          <span id="separador">|</span>
    
          <router-link to="/FiltroMoneda">
            <span id="textoIdioma">Moneda</span>
          </router-link>

          <span id="separador">|</span>
    
            <router-link to="/FiltroLogin">
            <span id="textoIdioma">Login</span>
            </router-link>
    
        </div>
      </div>
    )
}