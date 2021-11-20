import filtro from "./filtro.css";

export const Filtro = () => {
    return (
        <div className="contFiltros">

            <label>Ubicación</label>
            <label>Habitación</label>
            <label>Presupuesto</label>
            <label>Ingreso</label>
            <label>Estadia</label>

            <input type="text" placeholder="Bogotá" ></input>
            <select id="Habitacion" name="habitacionlist">
                <option value="priv">Habitación privada</option>
                <option value="share">Habitación compartida</option>
            </select>

            <input type="number" placeholder="$0" ></input>

            <input type="date" className="fIngreso" placeholder="Fecha" ></input>

            <select id="estadia" name="estadialist">
                <option value="7">7 dias</option>
                <option value="15">15 dias</option>
                <option value="30">30 dias</option>
                <option value="60">60 dias</option>
            </select>
        </div>
    )
}
