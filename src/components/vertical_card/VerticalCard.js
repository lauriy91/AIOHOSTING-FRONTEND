import verticalcard from './verticalcard.css'
import { Puntaje } from '../puntaje/Puntaje'
import {exampleimg} from './exampleimg.jpg'

export const VerticalCard = () => {
    return (
        <div className="contCard">
            <img className="imgCard" src="{exampleimg}" alt="ImagenAlojamiento"/>
            <div className="bodyCard">
                <h3>Hostal Bogotá</h3>
                <label className="lblPuntaje"> Puntuacion: 10 <Puntaje/> </label>
                <label>Ciudad: Bogotá</label>
                <button className="btnVerDetalles">Ver detalles</button>
            </div>
        </div>
    )
}
