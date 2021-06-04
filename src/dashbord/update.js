import { Form, Container, Button, Row, Modal, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Update = ({ el, movie, setMovie }) => {
  {
    /************************************Modifier Movie With  AXIOS /PUT****************************************/
  }
  const [input, setInput] = useState({
    title: movie[el].title,
    genres:movie[el].genres,
    poster:movie[el].poster,
  });
  const handelCahnge = (e) => {
    const{name,value}= e.target
    setInput({...input,[name]:value})
  };
  const relaodPage=()=>{
    window.location.reload()

  }
  const updateMovie = (el) => {
    axios
      .put(
        `https://movie-app-57731-default-rtdb.firebaseio.com/movie/${el}.json/`,
        input
      )
      .then((response) => {
        setInput(response.data);
      })
      .then(res=>relaodPage())

      .catch((err) => console.log(err));
    console.log("updateuuuuuuuuuuueeeeeee", input);
  };

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  return (
    <div>
      {/************************************Modal for modifier movie****************************************/}
      <Button onClick={handleShow1} id="pen" className="delete ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-pen"
          viewBox="0 0 16 16"
        >
          <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
        </svg>
      </Button>
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>update movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form>
              <Form.Group>
                <Form.Label>title movie</Form.Label>
                <br></br>
                <Form.Control
                  defaultValue={movie[el].title}
                  type="text"
                  name="title"
                  onChange={handelCahnge}
                  placeholder="Enter title"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group>
                <Form.Label>genre</Form.Label>
                <br></br>
                <Form.Control
                  defaultValue={movie[el].genres}
                  type="text"
                  name="genres"
                  onChange={handelCahnge 
                   
                  }
                  // onChange={handleChange}
                  placeholder="genre"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Image</Form.Label>
                <br></br>
                <Form.Control
                  defaultValue={movie[el].poster}
                  type="text"
                  name="poster"
                  onChange={handelCahnge }
                  // onChange={handleChange}
                  placeholder="poster"
                />
              </Form.Group>

              <div className="d-flex justify-content-end">
                <Button
                  variant="secondary"
                  className="mr-3"
                  onClick={handleClose1}
                >
                  Close
                </Button>
                <Button
                  onClick={() => updateMovie(el)}
                  variant="primary"
                  className="submit"
                >
                  update
                </Button>
              </div>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Update;
