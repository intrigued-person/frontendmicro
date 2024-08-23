import React, { useEffect, useState } from "react";
import { Container, Table, Button, Modal } from "react-bootstrap";
import axios from "axios";
import StaffDashBoard from "./StaffDashBoard";
import './ApplicationsRequest.css'; // Import custom CSS file

const ApplicationsRequest = () => {
  const [showModal, setShowModal] = useState(false);
  const [applicationId, setApplicationId] = useState(null);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = () => {
    axios.get("http://localhost:9952/getAllApplications").then((response) => {
      setApplications(response.data);
    });
  };

  const handleApprove = (applicationId, status) => {
    axios
      .post(`http://localhost:9952/updateStatus?applicationId=${applicationId}&status=${status}`)
      .then(() => {
        fetchApplications();
      });
  };

  const handleViewDocument = (applicationId) => {
    axios.get(`http://localhost:9952/findByID/${applicationId}`).then((res) => {
      setApplicationId(res.data);
      setShowModal(true);
    });
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <StaffDashBoard />
      <Container fluid className="w-100 applications-container">
        <h2 className="text-center mb-4">Student Details</h2>
        <Table striped bordered hover responsive className="custom-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile Number</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Father's Name</th>
              <th>Parent's Mobile</th>
              <th>Religion</th>
              <th>SSLC Mark</th>
              <th>12th Mark</th>
              <th>Degree Type</th>
              <th>Address</th>
              <th>State</th>
              <th>Status</th>
              <th>View Document</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((u) => (
              <tr key={u.applicationId}>
                <td>{u.name}</td>
                <td>{u.mobileNumber}</td>
                <td>{u.gender}</td>
                <td>{u.dob}</td>
                <td>{u.fatherName}</td>
                <td>{u.parentsMobile}</td>
                <td>{u.religion}</td>
                <td>{u.sslcMark}</td>
                <td>{u.twelthmark}</td>
                <td>{u.degreeType}</td>
                <td>{u.address}</td>
                <td>{u.state}</td>
                <td>
                  {u.status === "Applied" ? (
                    <span className="status-label pending">Pending</span>
                  ) : u.status === "Confirm" ? (
                    <span className="status-label confirm">Confirmed</span>
                  ) : u.status === "Reject" ? (
                    <span className="status-label reject">Rejected</span>
                  ) : (
                    <span className="status-label">{u.status}</span>
                  )}
                </td>
                <td>
                  <Button
                    variant="info"
                    size="sm"
                    onClick={() => handleViewDocument(u.applicationId)}
                    className="custom-button"
                  >
                    View Documents
                  </Button>
                </td>
                <td>
                  {u.status === "Applied" ? (
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleApprove(u.applicationId, "Approved")}
                      className="custom-button"
                      style={{ height: "50px", width: "110px" }}
                    >
                      Approve Application
                    </Button>
                  ) : u.status === "Confirm" || u.status === "Reject" ? (
                    "Application " + u.status
                  ) : (
                    <>
                      <Button
                        variant="success"
                        size="sm"
                        onClick={() => handleApprove(u.applicationId, "Confirm")}
                        className="mr-2"
                        style={{ height: "50px", width: "110px" }}
                      >
                        Confirm Admission
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleApprove(u.applicationId, "Reject")}
                        className="mr-2"
                        style={{ height: "50px", width: "110px" }}
                      >
                        Reject
                      </Button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Modal show={showModal} onHide={handleCloseModal} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>Document Viewer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {applicationId && (
              <img
                src={`data:image/jpeg;base64,${applicationId.profileImage}`}
                alt="Document"
                style={{ width: "100%", height: "auto" }}
              />
            )}
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default ApplicationsRequest;
