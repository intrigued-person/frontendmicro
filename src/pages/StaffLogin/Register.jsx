import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";

const Register = () => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({
    userName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();

  const handleSubmitt = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios.post("http://localhost:9952/addUser", user).then((res) => {
        Swal.fire({
          title: "Registered Successfully!",
          text: "Registered successfully.",
          icon: "success",
        });
        navigate("/studentlogin")
        console.log(user);
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!user.userName.trim()) {
      newErrors.userName = "* Username is required";
      isValid = false;
    } else {
      newErrors.userName = "";
    }

    if (!user.email.trim()) {
      newErrors.email = "* Email is required";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    if (!user.mobile.trim()) {
      newErrors.mobile = "* Mobile number is required";
      isValid = false;
    } else {
      newErrors.mobile = "";
    }

    if (!user.password.trim()) {
      newErrors.password = "* Password is required";
      isValid = false;
    } else {
      newErrors.password = "";
    }

    if (user.password !== user.confirmPassword) {
      newErrors.confirmPassword = "* Passwords do not match";
      isValid = false;
    } else {
      newErrors.confirmPassword = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const onInputchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Container fluid className="bg-light" style={{ minHeight: "100vh" }}>
      <Row
        className="justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <Col md={4} className="py-5 d-none d-md-block">
          <Image
            src="https://static.vecteezy.com/system/resources/previews/006/470/647/original/university-education-logo-design-template-free-vector.jpg"
            alt="College Logo"
            fluid
            style={{ maxWidth: "500px", maxHeight: "700px" }}
          />
        </Col>
        <Col md={6} class="form" className="py-5">
          <div className="p-4 shadow rounded bg-white md-6">
            <div className="text-center mb-4">
              <h2 className="mt-3">Student Registration</h2>
            </div>

            <Form onSubmit={handleSubmitt}>
              
             
              <Form.Group controlId="formUsername"className="mb-3" >
                <Form.Label className="float-start">Username</Form.Label>
                <Form.Control
                  type="text"
                  name="userName"
                  placeholder="Enter your username"
                  onChange={onInputchange}
                  className="input-style"                  
                />
                <Form.Text className="text-danger float-end">{errors.userName}</Form.Text>
              </Form.Group>
             
              <Form.Group controlId="formEmail " className="mb-3">
                <Form.Label className="float-start">Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={onInputchange}
                  className="input-style"
                  pattern=".+@gmail\.com"
                />
                <Form.Text className="text-danger float-end">{errors.email}</Form.Text>
              </Form.Group>
              <Form.Group controlId="formMobile">
                <Form.Label className="float-start">Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  name="mobile"
                  placeholder="Enter your mobile number"
                  onChange={onInputchange}
                  className="input-style"
                  pattern="[789][0-9]{9}"
                />
                <Form.Text className="text-danger float-end">{errors.mobile}</Form.Text>
              </Form.Group>
              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label className="float-start">Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={onInputchange}
                  className="input-style"
                  pattern=".{8,}"
                />
                <Form.Text className="text-danger float-end">{errors.password}</Form.Text>
              </Form.Group>
              <Form.Group controlId="formConfirmPassword" className="mb-3">
                <Form.Label className="float-start ">Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  onChange={onInputchange}
                  className="input-style"
                />
                <Form.Text className="text-danger ">{errors.confirmPassword}</Form.Text>
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                block
                className="mt-5 mb-3"
              >
                Register
              </Button>
              <p>
                Already have an account? <Link to="/studentlogin">Login here</Link>
              </p>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
