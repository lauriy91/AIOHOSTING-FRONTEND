import { BannerSinFiltro } from "../banner/BannerSinFiltro"
import Map from '../map/Map'
import Carrousel from '../carousel/carousel'
import Descripcion from '../description/description'
import {LabelIdioma} from '../labelIdioma/LabelIdioma'
import IconosDescripcion from '../iconos_descripcion/IconosDescripcion'

const tableStyle = {
    width: "80%",
    margin: "10% 5%"
}

export const DescripcionAlojamiento = () => {
    return (
        <>
            <BannerSinFiltro/>
            <LabelIdioma/>
            <Carrousel/>
            <table style={tableStyle}>
                <td><Descripcion/></td>
                <td><IconosDescripcion/></td>
            </table>
            
            
            
            <Map/>
        </>
    )
}
