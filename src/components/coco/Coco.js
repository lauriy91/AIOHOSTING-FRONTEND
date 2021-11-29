import coco from "./coco.css"

export const Coco = () => {
    return (
        <div class="banner">
        <div class="col s8">
    
          <router-link to="/Filtrocoworking">
            <span id="textoCoco"> Coworking </span>
          </router-link>
    
          <span id="separador2">|</span>
    
          <router-link to="/Filtrocoliving">
            <span id="textoCoco">Coliving</span>
          </router-link>
    
        </div>
      </div>
    )
}