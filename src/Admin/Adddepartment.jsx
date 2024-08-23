import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const Adddepartment = () => {
  const [department, setDepartment] = useState({
    dept: "",
    courseType: "",
    vacancy: "",
  });

  const [errors, setErrors] = useState({
    dept: "",
    courseType: "",
    vacancy: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post("http://localhost:9952/addDepartment", department);
        setDepartment(response.data);
        Swal.fire({
          title: "Added Successfully!",
          text: "Department has been added successfully.",
          icon: "success",
        });
        navigate("/Department");
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "There was an issue adding the department.",
          icon: "error",
        });
      }
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!department.dept.trim()) {
      newErrors.dept = "* Department name is required";
      isValid = false;
    } else {
      newErrors.dept = "";
    }

    if (!department.courseType.trim()) {
      newErrors.courseType = "* Course type is required";
      isValid = false;
    } else {
      newErrors.courseType = "";
    }

    if (!department.vacancy.trim() || isNaN(department.vacancy) || department.vacancy <= 0) {
      newErrors.vacancy = "* Vacancy must be a positive number";
      isValid = false;
    } else {
      newErrors.vacancy = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const onInputChange = (e) => {
    setDepartment({ ...department, [e.target.name]: e.target.value });
  };

  return (
    <Container fluid className="bg-light" style={{ minHeight: "100vh" }}>
      <Row
        className="justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <Col md={6} className="form py-5">
          <div className="p-4 shadow rounded bg-white">
            <div className="text-center mb-4">
              <h2 className="mt-3">Add Department</h2>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formDept" className="mb-3">
                <Form.Label className="float-start">Department Name</Form.Label>
                <Form.Control
                  type="text"
                  name="dept"
                  placeholder="Enter Department Name"
                  value={department.dept}
                  onChange={onInputChange}
                  isInvalid={!!errors.dept}
                />
                <Form.Control.Feedback type="invalid">{errors.dept}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formCourseType" className="mb-3">
                <Form.Label className="float-start">Course Type</Form.Label>
                <Form.Control
                  as="select"
                  name="courseType"
                  value={department.courseType}
                  onChange={onInputChange}
                  isInvalid={!!errors.courseType}
                >
                  <option value="">Select Course Type</option>
                  <option value="UG">UG</option>
                  <option value="PG">PG</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">{errors.courseType}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formVacancy" className="mb-3">
                <Form.Label className="float-start">Department Vacancy</Form.Label>
                <Form.Control
                  type="number"
                  name="vacancy"
                  placeholder="Enter Vacancy"
                  value={department.vacancy}
                  onChange={onInputChange}
                  isInvalid={!!errors.vacancy}
                />
                <Form.Control.Feedback type="invalid">{errors.vacancy}</Form.Control.Feedback>
              </Form.Group>
              
              <Button
                variant="primary"
                type="submit"
                className="mt-3 mb-3"
              >
                Add Department
              </Button> &nbsp;
              <Link to="/Department">
                <Button
                  variant="secondary"
                  className="mt-3 mb-3"
                >
                  Back
                </Button>
              </Link>
              
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Adddepartment;
