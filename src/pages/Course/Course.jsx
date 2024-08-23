import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Course.css'; // Import the CSS file
import Topnav from '../Navbar/Topnav';

const Course = () => {
    const undergraduateCourses = [
        { name: "Computer Science Engineering", description: "Focuses on computer programming, algorithms, software development, and system architecture." },
        { name: "Mechanical Engineering", description: "Deals with the design, construction, and operation of machines and mechanical systems." },
        { name: "Electronics and Communication Engineering", description: "Involves the study of electronic devices, circuits, communication systems, and signal processing." },
        { name: "Electrical Engineering", description: "Concentrates on electrical systems, power generation, transmission, and distribution." },
        { name: "Electrical and Electronics Engineering", description: "Combines electrical and electronics principles for designing and developing electrical systems and devices." },
        { name: "Civil Engineering", description: "Focuses on the design, construction, and maintenance of infrastructure like buildings, roads, bridges, and dams." },
        { name: "Chemical Engineering", description: "Involves the application of chemistry and engineering principles to design and operate chemical processes." },
        { name: "Information Technology", description: "Concentrates on the use of computers and telecommunications to store, retrieve, and transmit data." },
        { name: "Instrumentation and Control Engineering", description: "Focuses on the design and implementation of instrumentation systems for control processes." },
        { name: "Electronics Engineering", description: "Involves the design and development of electronic systems and devices." },
    ];

    const postgraduateCourses = [
        { name: "M.Tech in Computer Science Engineering", description: "Advanced study in computer science with a focus on research and specialization." },
        { name: "M.Tech in Mechanical Engineering", description: "Advanced study in mechanical engineering, often with specialization options." },
        { name: "M.Tech in Electronics and Communication Engineering", description: "Advanced study in electronics and communication systems, including advanced signal processing and communication protocols." },
    ];

    const renderEngineeringCourses = (courses, title) => {
        return (
           
            <Container className="my-5">
                <h2 className="text-center mb-4">{title}</h2>
                <Row className="g-4">
                    {courses.map(course => (
                        <Col md={4} lg={3} key={course.name} className="d-flex">
                            <Card className="course-card flex-fill">
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title className="mb-2">{course.name}</Card.Title>
                                    <Card.Text className="mb-0 flex-grow-1">{course.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    };

    return (
        <div>
            <Topnav/>
            {renderEngineeringCourses(undergraduateCourses, 'Undergraduate Engineering Courses')}
            {renderEngineeringCourses(postgraduateCourses, 'Postgraduate Engineering Courses')}
        </div>
    );
};

export default Course;
