import { BsBicycle } from "react-icons/bs";
import { BiCoffeeTogo } from "react-icons/bi";
import { FiWifi } from "react-icons/fi";
import { MdElectricCar, MdTvOff } from "react-icons/md";
import iconosdescripcion from "./iconosdescripcion.css";

function IconosDescripcion() {
  return (
    <table className="Iconos">
      <tr>
        <td>
          <BsBicycle />
        </td>
        <td>Acceso a parqueaderos de bicicleta</td>
      </tr>

      <tr>
        <td>
          <BiCoffeeTogo />
        </td>
        <td>Acceso de cafetería</td>
      </tr>

      <tr>
        <td>
          <FiWifi />
        </td>
        <td>Wifi</td>
      </tr>

      <tr>
        <td>
        <MdElectricCar/>
        </td>
        <td>Acceso a parqueaderos de bicicleta</td>
      </tr>

      <tr>
        <td>
        <MdTvOff/>
        </td>
        <td>TV</td>
      </tr>
    </table>
  );
}

export default IconosDescripcion;
