import React, { useState } from "react";
import { Container, Row, Col, Carousel, Card, Button } from "react-bootstrap";
import Topnav from "../Navbar/Topnav";
import "./home.css";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const HomePage = () => {
  const testimonials = [
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Martin Escobar",
      title: "Founder of Meta",
      quote: "Innovative thinking and dedication to excellence are key to transforming the future. Our success is built on a foundation of hard work and visionary leadership.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Angela Stian",
      title: "Product Designer",
      quote: "Design is not just about creating beautiful things; it's about solving problems and enhancing user experiences. Every project is an opportunity to make a meaningful impact.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Karim Ahmed",
      title: "DevOps Engineer",
      quote: "In the world of technology, adaptability and continuous improvement are essential. Embracing new challenges and optimizing processes drive success and efficiency.",
    },
  ];


  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <div>
      <Topnav />

      <Carousel className="p-3 mt-3">
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="https://wallpapercave.com/wp/wp2140467.jpg"
            alt="Campus"
          />
          <Carousel.Caption>
            <h3>Campus</h3>
            <p>Good and clean Campus</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="https://wallpaperaccess.com/full/5487905.jpg"
            alt="Library"
          />
          <Carousel.Caption>
            <h3>Library</h3>
            <p>Nice place to learn</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add more Carousel.Items for additional slider images */}
      </Carousel>

      {/* Announcements */}
      <Container className="mt-5">
        <h2 className="text-center mb-4">Announcements</h2>
        <Row>
          <Col md={6}>
            <Card className="announcement-card">
              <Card.Body>
                <Card.Title>Admission Started</Card.Title>
                <Card.Text>
                  2024-2025 admission started.{" "}
                  <a href="/instruction" className="announcement-link">
                    Register and Apply your Application!!!
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="announcement-card">
              <Card.Body>
                <Card.Title>Result Announced</Card.Title>
                <Card.Text>
                  2023-2024 semester results have been announced.{" "}
                  <a href="#" className="announcement-link">
                    Check your results here
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Course Details */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Course Details</h2>
        <Row>
          <Col md={6}>
            <Card className="course-card">
              <Card.Body>
                <Card.Title>UG Courses</Card.Title>
                <Card.Text>
                  Course description goes here. Add more course details as needed.
                </Card.Text>
                <Button variant="primary">View More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="course-card">
              <Card.Body>
                <Card.Title>PG Courses</Card.Title>
                <Card.Text>
                  Another course description goes here. You can add more courses below.
                </Card.Text>
                <Button variant="primary">View More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Testimonials */}
      <section className="py-5 bg-light">
        <Container className="text-center">
          <h3 className="text-dark font-weight-bold pb-4">Alumnies</h3>
          <Row>
            <Col>
              <ul className="list-unstyled">
                {testimonials.map((item, idx) => (
                  currentTestimonial === idx && (
                    <li key={idx} className="testimonial-item">
                      <figure>
                        <blockquote>
                          <p className="text-dark font-weight-bold">
                            “{item.quote}“
                          </p>
                        </blockquote>
                        <div className="mt-3">
                          <img src={item.avatar} className="testimonial-avatar" alt={item.name} />
                          <div className="mt-2">
                            <span className="d-block font-weight-bold">{item.name}</span>
                            <span className="d-block text-muted">{item.title}</span>
                          </div>
                        </div>
                      </figure>
                    </li>
                  )
                ))}
              </ul>
              <div className="mt-4">
                <ul className="pagination justify-content-center">
                  {testimonials.map((_, idx) => (
                    <li key={idx} className="page-item">
                      <button
                        className={`page-link ${currentTestimonial === idx ? 'active' : ''}`}
                        onClick={() => setCurrentTestimonial(idx)}
                      ></button>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="bg-dark text-light py-4">
        <Container>
          <Row className="align-items-center">
            <Col md={4} className="mb-3 mb-md-0">
              <h5>University of Houston</h5>
              <p>Houston, Texas 77204</p>
              <p>(713) 743-2255</p>
            </Col>
            <Col md={4} className="mb-3 mb-md-0 text-center">
              <h5>About Us</h5>
              <p>
                Follow us on our social media platforms including Facebook, Instagram, YouTube, Twitter, and Google+ University of Houston.
              </p>
            </Col>
            <Col md={4} className="text-center">
              <h5>Quick Links</h5>
              <Nav className="justify-content-center">
                <Nav.Link as={Link} to="/about" className="footer-link">About Us</Nav.Link>
                <Nav.Link as={Link} to="/course" className="footer-link">Courses</Nav.Link>
                <Nav.Link as={Link} to="/stafflogin" className="footer-link">Staff Login</Nav.Link>
                <Nav.Link as={Link} to="/studentlogin" className="footer-link">Student Login</Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default HomePage;
