import React from 'react'

import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={course.image} />

      <Card.Body>
        <Card.Title>{course.name}</Card.Title>
        <Card.Text>{course.description}</Card.Text>

        <p><strong>Duration:</strong> {course.duration}</p>
        <p><strong>Level:</strong> {course.level}</p>

        <Button onClick={() => navigate(`/courses/${course.id}`)}>
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;