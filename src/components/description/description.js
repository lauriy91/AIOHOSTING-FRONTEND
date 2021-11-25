import './description.css';
//import Accordion from 'react-bootstrap/Accordion'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const description = () => {
    return (

        <div class="container">
            <Container>
                <Row md={4}>
                    <Col className="Titulo">Lo que ofrece este lugar:</Col>
                </Row>
                <br />
                <Row md="auto">
                    <Col className="Parrafo" md={9}>
                        Frente a la playa de Cartagena de Indias, en Bocagrande, el Cartagena Plaza Hotel
                        ofrece desayuno buffet, personal disponible 24h para asistirlo y actividades de recreación. El Wi-Fi y el estacionamiento son gratuitos.
                        <br/>
                        <br/>
                        El huésped puede disfrutar de la piscina con vista panorámica, ubicada en el piso 18, o
                        salir de rumba en la discoteca Rezak Bar Club. Además encontrará club para niños y
                        adolescentes, con pelotero y videojuegos. El staff de recreación organiza clases de
                        baile, entre otras actividades.
                    </Col>
                </Row>
            </Container>

            {/*} <Accordion >
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Lo que ofrece este lugar: </Accordion.Header>
                    <Accordion.Body>
                        <p class="text-dark">
                        Frente a la playa de Cartagena de Indias, en Bocagrande, el Cartagena Plaza Hotel
                        ofrece desayuno buffet, personal disponible 24h para asistirlo y actividades de recreación. El Wi-Fi y el estacionamiento son gratuitos.
                        El huésped puede disfrutar de la piscina con vista panorámica, ubicada en el piso 18, o
                        salir de rumba en la discoteca Rezak Bar Club. Además encontrará club para niños y
                        adolescentes, con pelotero y videojuegos. El staff de recreación organiza clases de
                        baile, entre otras actividades.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                    </Accordion.Body>
                </Accordion.Item>
    
            </Accordion>
            {*/}

        </div>
    );
}

export default description;



/*Lo que ofrece este lugar:
*/