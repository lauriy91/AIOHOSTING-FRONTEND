import React from "react";
import { Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'



const hStyle = { color: 'purple' };


const Formulario = () => {
    return (
        <>
            <Form>
                <h1 style={hStyle} align="center" >Formularios</h1>
                <br />
                <h2 style={hStyle} align="left" >Login</h2>
                <Row className="align-items-center">
                    <Col sm={3} className="my-1">
                        <Form.Label htmlFor="inlineFormInputName">
                            Nombre Hotel:
                        </Form.Label>
                        <Form.Control id="inlineFormInputName" placeholder="Hotel Wiwa" />
                    </Col>
                    <Col sm={3} className="my-1">
                        <Form.Label htmlFor="inlineFormInputtype">
                            Tipo de Alojamiento:
                        </Form.Label>
                        <Form.Control id="inlineFormInputtype" placeholder="Coworking/Coliving" />
                    </Col>
                    <Col xs="auto" className="my-1">
                        <Form.Label htmlFor="inlineFormInputPrice">
                            Precio:
                        </Form.Label>
                        <Form.Control id="inlineFormInputPrice" placeholder="$250.000" />
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col sm={3} className="my-1">
                        <Form.Label htmlFor="inlineFormInputCity">
                            Ciudad:
                        </Form.Label>
                        <Form.Control id="inlineFormInputCity" placeholder="Medellin" />
                    </Col>
                    <Col sm={3} className="my-1">
                        <Form.Label htmlFor="inlineFormInputEscenary">
                            Escenario:
                        </Form.Label>
                        <Form.Control id="inlineFormInputEscenary" placeholder="medellin" />
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col sm={3} className="my-1">
                        <Form.Label htmlFor="inlineFormInputTime">
                            Tiempo de Estadia:
                        </Form.Label>
                        <Form.Control id="inlineFormInputTime" placeholder="15 dias" />
                    </Col>
                    <Col sm={3} className="my-1">
                        <Form.Label htmlFor="inlineFormInputPunctuation">
                            Puntuacion:
                        </Form.Label>
                        <Form.Control id="inlineFormInputPunctuation" placeholder="4.6" />
                    </Col>
                </Row>
                <h2 style={hStyle} align="center" >Reservar</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}

export default Formulario;