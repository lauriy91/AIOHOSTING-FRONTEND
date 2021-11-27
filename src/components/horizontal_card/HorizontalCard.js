import horizontalcard from './horizontalcard.css'
import { Puntaje } from '../puntaje/Puntaje'
import exampleimg from './exampleimg.jpg'

export const HorizontalCard = () => {
    return (
        <div className="conthCard">
            <img className="imghCard" src={exampleimg} alt="ImagenAlojamiento"/>
            <div className="bodyhCard">
                <h3>Hostal Bogotá</h3>
                <label className="lblPuntaje"> Puntuacion: 10 <Puntaje/> </label>
                <label>Ciudad: Bogotá</label>

            </div>
            <div className="conthPrecio">
            <span>Precio x dias:</span>
            <span className="spnPrecio">$1000000 COP</span> 
            <button className="btnhVerDetalles">Ver detalles</button>
            </div>            
        </div>
    )
}
