import React, { useEffect, useState } from "react";
import { Container, Button, Modal, Card, Form } from "react-bootstrap";
import axios from "axios";
import AdminDashBoard from "./AdminDashBoard";
import './AdminViewApplications.css'; // Import custom CSS file

const AdminViewPplications = () => {
  const [showModal, setShowModal] = useState(false);
  const [applicationId, setApplicationId] = useState({});
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [expandedCards, setExpandedCards] = useState(new Set()); // Track expanded cards
  const [filterOptions, setFilterOptions] = useState({
    sortBy10th: false,
    sortBy12th: false,
  });

  useEffect(() => {
    fetchApplications();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [applications, filterOptions]);

  const fetchApplications = () => {
    axios.get("http://localhost:9952/getAllApplications").then((response) => {
      setApplications(response.data);
    });
  };

  const applyFilters = () => {
    let filtered = [...applications];

    // Prefer older applicants by sorting by date of birth (earlier dates are older)
    filtered = filtered.sort((a, b) => new Date(b.dob) - new Date(a.dob));

    // Apply filters for 10th and 12th marks
    if (filterOptions.sortBy12th) {
      filtered = filtered.sort((a, b) => b.twelthmark - a.twelthmark);
    }
    if (filterOptions.sortBy10th) {
      filtered = filtered.sort((a, b) => b.sslcMark - a.sslcMark);
    }

    setFilteredApplications(filtered);
  };

  const handleApprove = (applicationId, status) => {
    axios
      .post(`http://localhost:9952/updateStatus?applicationId=${applicationId}&status=${status}`)
      .then(() => {
        fetchApplications(); // Reload the applications list
      });
  };

  const handleCloseModal = () => setShowModal(false);

  const handleViewDocument = async (applicationId) => {
    await axios.get(`http://localhost:9952/findByID/${applicationId}`).then((res) => {
      setApplicationId(res.data);
      setShowModal(true);
    });
  };

  const toggleFilter = (filterType) => {
    setFilterOptions((prev) => ({
      ...prev,
      [filterType]: !prev[filterType]
    }));
  };

  const handleCardExpand = (appId) => {
    setExpandedCards((prev) => {
      const newExpandedCards = new Set(prev);
      if (newExpandedCards.has(appId)) {
        newExpandedCards.delete(appId);
      } else {
        newExpandedCards.add(appId);
      }
      return newExpandedCards;
    });
  };

  return (
    <div>
      <AdminDashBoard />
      <Container fluid className="w-100 admin-container">
        <h2 className="text-center mb-4">Student Details</h2>

        <Form className="mb-4 filter-form">
          <Form.Group>
            <Form.Check
              type="checkbox"
              label="Sort by Cutoff Marks (12th)"
              checked={filterOptions.sortBy12th}
              onChange={() => toggleFilter('sortBy12th')}
            />
            <Form.Check
              type="checkbox"
              label="Sort by SSLC Marks"
              checked={filterOptions.sortBy10th}
              onChange={() => toggleFilter('sortBy10th')}
            />
          </Form.Group>
        </Form>

        <div className="d-flex flex-wrap card-container">
          {filteredApplications.map((app) => (
            <Card key={app.applicationId} className="application-card">
              <Card.Body>
                <Card.Title>{app.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{app.degreeType}</Card.Subtitle>
                <Card.Text>
                  <strong>SSLC Mark:</strong> {app.sslcMark}<br />
                  <strong>Cutoff Mark (12th):</strong> {app.twelthmark}<br />
                  <strong>Gender:</strong> {app.gender}
                </Card.Text>
                
                {expandedCards.has(app.applicationId) && (
                  <div>
                    <Card.Text>
                      <strong>Date of Birth:</strong> {app.dob}<br />
                      <strong>Father's Name:</strong> {app.fatherName}<br />
                      <strong>Parent's Mobile:</strong> {app.parentsMobile}<br />
                      <strong>Religion:</strong> {app.religion}<br />
                      <strong>Address:</strong> {app.address}<br />
                      <strong>State:</strong> {app.state}<br />
                      <strong>Status:</strong> {app.status}
                    </Card.Text>
                    <Button
                      variant="info"
                      onClick={() => handleViewDocument(app.applicationId)}
                    >
                      View Documents
                    </Button>
                  </div>
                )}

                <Button
                  variant="primary"
                  onClick={() => handleCardExpand(app.applicationId)}
                  className="mt-2"
                >
                  {expandedCards.has(app.applicationId) ? 'Show Less' : 'View More Details'}
                </Button>
                
                <div className="action-buttons mt-2">
                  {app.status === "Applied" ? (
                    <Button
                      variant="primary"
                      onClick={() => handleApprove(app.applicationId, "Approved")}
                    >
                      Approve Application
                    </Button>
                  ) : app.status === "Confirm" ? (
                    <span className="status-label confirm">Application Confirmed</span>
                  ) : app.status === "Reject" ? (
                    <span className="status-label reject">Application Rejected</span>
                  ) : (
                    <>
                      <Button
                        variant="success"
                        onClick={() => handleApprove(app.applicationId, "Confirm")}
                      >
                        Confirm Admission
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => handleApprove(app.applicationId, "Reject")}
                      >
                        Reject
                      </Button>
                    </>
                  )}
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>

        <Modal show={showModal} onHide={handleCloseModal} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>Document Viewer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={`data:image/jpeg;base64,${applicationId.profileImage}`}
              alt="Document"
              style={{ width: "100%", height: "auto" }}
            />
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default AdminViewPplications;




