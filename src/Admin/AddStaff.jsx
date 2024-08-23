import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import axios from "axios";

const AddStaff = () => {
  const [staff, setStaff] = useState({
    staffName: "",
    role: "",
    counsellorMobile: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    staffName: "",
    role: "",
    counsellorMobile: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleSubmitt = async (e) => {
    e.preventDefault();
    try {
      if (validateForm()) {
        await axios.post("http://localhost:9952/addStaff", staff).then((res) => {
          setStaff(res.data);
          console.log(staff);
          Swal.fire({
            title: "Staff Successfully!",
            text: "Staff has been Added successfully.",
            icon: "success",
          });
          navigate("/StaffDetails");
        });
      }
    } catch (error) {}
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!staff.staffName.trim()) {
      newErrors.staffName = "* staffName is required";
      isValid = false;
    } else {
      newErrors.staffName = "";
    }

    if (!staff.role.trim()) {
      newErrors.role = "* role is required";
      isValid = false;
    } else {
      newErrors.role = "";
    }

    if (!staff.counsellorMobile.trim()) {
      newErrors.counsellorMobile = "* counsellorMobile number is required";
      isValid = false;
    } else {
      newErrors.counsellorMobile = "";
    }

    if (!staff.password.trim()) {
      newErrors.password = "* Password is required";
      isValid = false;
    } else {
      newErrors.password = "";
    }

    if (staff.password !== staff.confirmPassword) {
      newErrors.confirmPassword = "* Passwords do not match";
      isValid = false;
    } else {
      newErrors.confirmPassword = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const onInputchange = (e) => {
    setStaff({ ...staff, [e.target.name]: e.target.value });
  };

  return (
    <Container fluid className="bg-light" style={{ minHeight: "100vh" }}>
      <Row className="justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <Col md={6} className="form py-5">
          <div className="p-4 shadow rounded bg-white md-6">
            <div className="text-center mb-4">
              <h2 className="mt-3">Add Staff</h2>
            </div>
            <Form onSubmit={handleSubmitt}>
              <Form.Group controlId="formstaffName" className="mb-3">
                <Form.Label className="float-start">Name</Form.Label>
                <Form.Control
                  type="text"
                  name="staffName"
                  placeholder="Enter your staffName"
                  onChange={onInputchange}
                  className="input-style"
                />
                <Form.Text className="text-danger float-end">{errors.staffName}</Form.Text>
              </Form.Group>
              <Form.Group controlId="formRole" className="mb-3">
                <Form.Label className="float-start">Role</Form.Label>
                <Form.Control
                  as="select"
                  name="role"
                  onChange={onInputchange}
                  className="input-style"
                >
                  <option value="">Select Role</option>
                  <option value="Admin">Admin</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Staff">Staff</option>
                </Form.Control>
                <Form.Text className="text-danger float-end">{errors.role}</Form.Text>
              </Form.Group>
              <Form.Group controlId="formcounsellorMobile" className="mb-3">
                <Form.Label className="float-start">Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  name="counsellorMobile"
                  placeholder="Enter your Mobile number"
                  onChange={onInputchange}
                  className="input-style"
                  pattern="[789][0-9]{9}"
                />
                <Form.Text className="text-danger float-end">{errors.counsellorMobile}</Form.Text>
              </Form.Group>
              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label className="float-start">Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={onInputchange}
                  className="input-style"
                />
                <Form.Text className="text-danger float-end">{errors.password}</Form.Text>
              </Form.Group>
              <Form.Group controlId="formConfirmPassword" className="mb-3">
                <Form.Label className="float-start">Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  onChange={onInputchange}
                  className="input-style"
                />
                <Form.Text className="text-danger float-end">{errors.confirmPassword}</Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit" block className="mt-3 mb-3">
                Add Staff
              </Button>
              <Link to="/StaffDetails"> <Button
                variant="secondary"
               
                block
                className="mt-3 mb-3"
              >
               Back
              </Button></Link>
            </Form>
          </div>
        </Col>
      </Row>
      
      </Container>
  );
};

export default AddStaff;
