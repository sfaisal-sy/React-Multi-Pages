import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import coursesData from '../DATA/coursesData';

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedCourse = coursesData.find(
    (course) => course.id === parseInt(id)
  );

  if (!selectedCourse) {
    return <h2>Course Not Found</h2>
  }

  return (
    <div>
      <h1>Course Details Page</h1>
      <button onClick={() => navigate(-1)}>
        Go Back
      </button>
      <h2>Course ID: {id}</h2>

        <div style={{ padding: "20px" }}>
    <h1>{selectedCourse.name}</h1>

    <img
      src={selectedCourse.image}
      alt={selectedCourse.name}
      width="300"
    />

    <p>{selectedCourse.description}</p>

    <p><strong>Duration:</strong> {selectedCourse.duration}</p>
    <p><strong>Level:</strong> {selectedCourse.level}</p>
    <p><strong>Instructor:</strong> {selectedCourse.instructor}</p>

    <button>Enroll Now</button>
  </div>



    </div>
  );
};

export default CourseDetails;