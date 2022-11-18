import logo from "./logo.svg";
import { Form, Button, Modal, NavItem } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const handleClose = (e) => {
    setShow(false);
  };
  const sendDataButton = (e) => {
    e.preventDefault();
    setShow(true);
  };

  function sendData(e) {
    const data = {
      name: name,
      lastName: lastName,
      date: date,
      message: message,
    };
    console.log(data);
  }
  return (
    <div>
      <Form className="m-3" onClick={sendData}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Apellido"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Fecha de Nacimiento</Form.Label>
          <Form.Control
            type="date"
            placeholder="Ingresar fecha de nacimiento"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formArea">
          <Form.Label>Mensaje Pesonalizado</Form.Label>
          <Form.Control
            as="textarea"
            rows="6"
            placeholder="Mensaje"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="mt-3"
          onClick={sendDataButton}
        >
          ENVIAR
        </Button>
      </Form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h3>USUARIO REGISTRADO</h3>
        </Modal.Header>
        <Modal.Body className="text-center">
          <div>
            <p>Nombre: {name}</p>
            <p>Apellidos: {lastName}</p>
            <p>Fecha de Nacimiento: {date}</p>
            <p>Mensaje: {message}</p>
            <h5>BIENVENIDO</h5>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;
