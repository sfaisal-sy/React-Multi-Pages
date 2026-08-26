import React from 'react';
import { useParams } from 'react-router-dom';
import instructorData from '../DATA/instructorData'

const InstructorDetails = () => {
  const {id} = useParams();

    const selectedInstructor = instructorData.find(
      (instructor) => instructor.id === parseInt(id)
    );

    if(!selectedInstructor) {
      return <h2>INSTRUCTOR NOT FOUND</h2>
    }

  return (
    <>
        <h2>INSTRUCTOR DETAILS PAGE</h2>

         <div style={{ padding: "20px" }}>
      <h1>{selectedInstructor.name}</h1>

      <img
        src={selectedInstructor.image}
        alt={selectedInstructor.name}
        width="250"
      />

      <p><strong>Designation:</strong> {selectedInstructor.designation}</p>
      <p><strong>Expertise:</strong> {selectedInstructor.expertise}</p>
      <p><strong>Experience:</strong> {selectedInstructor.experience}</p>

      <button>Contact Instructor</button>
    </div>

    </>
  )
}

export default InstructorDetails
