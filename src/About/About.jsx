import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import './About.css';
import Topnav from '../pages/Navbar/Topnav';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaGooglePlusG } from 'react-icons/fa';

const About = () => {
  return (
    <div>
      <Topnav />

      <header className="header">
        <Container fluid>
          <Row className="justify-content-center">
            <Col xs={12} md={8} className="text-center">
              <h1>About Our College</h1>
              <p>Learn more about our college, our mission, and our commitment to excellence.</p>
            </Col>
          </Row>
        </Container>
      </header>

      {/* Main Content Section */}
      <section className="main-content">
        <Container>
          <Row>
            <Col md={6}>
              <h2>Our Mission</h2>
              <p>The University of Houston draws strength from its diversity to transform lives and communities through education, research, service and innovation in a real world setting. UH is an engine for discovery, conversation and change that informs and leads local, state, national and global partnerships.</p>
                <h2>Our Vision</h2>
              <p>This U.S. News & World Report ranking is based on graduation rate, affordability, social mobility and student-related institutional investment, among other measures.</p>
              <h2>Our Values</h2>
              <ul>
                <p>Innovation</p>
                <p>Accountability</p>
                <p>Collaboration</p>
                <p>Resilience</p>
              </ul>
            </Col>
            <Col md={6}>
              <Image src="https://th.bing.com/th/id/R.a10fb0f5201358b27b33941b2a1033f7?rik=6zUCKO0VFAENPQ&riu=http%3a%2f%2fwww.gwinnettcollege.edu%2fwp-content%2fuploads%2f2017%2f04%2fgrad-e1492625309531.jpg&ehk=EZ8hm%2bmK2fWdVTyB9MYxrAvimlqwoo39OpRz25GEu5E%3d&risl=&pid=ImgRaw&r=0" alt="About Us Image" fluid />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <h2>Our Achievements</h2>
              <Card>
                <Card.Body>
                  <Card.Title>2023: College ranked #1 in the country</Card.Title>
                  <Card.Text>
                    You can follow us on our social media platforms including Facebook, Instagram, YouTube, Twitter, and Google+ at Sacred Heart College (Autonomous).
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="mt-3">
                <Card.Body>
                  <Card.Title>2022: Award for Excellence in Education</Card.Title>
                  <Card.Text>
                    You can follow us on our social media platforms including Facebook, Instagram, YouTube, Twitter, and Google+ at Sacred Heart College (Autonomous).
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer">
        <Container>
          <Row>
            <Col>
              <p>University of Houston</p>
              <p>Houston, Texas 77204</p>
              <p>(713) 743-2255</p>
            </Col>
            <Col>
              <h5>About Us</h5>
              <p>You can follow us on our social media platforms including Facebook, Instagram, YouTube, Twitter, and Google+ @ Houston College (Autonomous).</p>
              <div className="social-icons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer"><FaGooglePlusG /></a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default About;

