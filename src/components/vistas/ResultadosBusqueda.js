import { Pagination } from 'react-bootstrap'
import {Banner} from '../banner/Banner'
import {HorizontalCard} from '../horizontal_card/HorizontalCard'
import Paginacion from '../paginacion/Paginacion'




export const ResultadosBusqueda = () => {
    return (
        <>
            <Banner/>
            
            <div>
                <HorizontalCard/>
                <HorizontalCard/>
                <HorizontalCard/>
            </div>
            <Paginacion/>
        </>
    )
}
