import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Forma = ({ onUsernameSubmit }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onUsernameSubmit(username);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            margin: "2px auto",
            width: "30vw",
          }}
        >
          Go!
        </Button>
      </Form>
    </div>
  );
};

export default Forma;
