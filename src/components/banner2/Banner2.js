import banner2 from './banner2.css'
import AIOHostingLogo from './AIOHostingLogo.png'
import {Coco} from '../coco/Coco'
import { LabelIdioma } from '../labelIdioma/LabelIdioma';

export const Banner2 = () => {
    return (
        <>
        <div id="imagenBanner">
            <img height="500px" width="100%" src="https://i.postimg.cc/g2X0FsBH/H001.jpg"></img>
        </div>
        {/* Banner superior */}
        <img className="logo" src={AIOHostingLogo} alt="Logo" />

        <div className="labelIdioma"><LabelIdioma/></div>

        <div className="about">
            <h4 className="titleAbout">ABOUT US</h4>
            <p>lorem mansmm sfdfdfmkl dsdsfdfdfd fdffdf sfdfdfdffdf</p>
            <p>fdfsfsdasds sfdfdgfgfgffsd dsdsdsdsdsfdfdf </p>
            <p>fsfsdsdserrrgddsfsdsfsf fdfsfsfsfs</p>
        </div>

        {/* Banner inferior */}
        <nav className="coco">
            <Coco/>          
        </nav>
        </>
    )
}