import React from 'react'
import { useNavigate } from 'react-router-dom'

const InstructorCard = ({instructor}) => {

  const navigate = useNavigate();

  return (

    <>

    <div style={{border: '1px solid gray', margin: '10px', padding: '10px' }}>
      
      {/* <img src={instructor.image} alt={instructor.name} width='150' /> */}
      <h2>{instructor.name}</h2>
      <p>{instructor.designation}</p>

      <p><strong>Expertise:</strong> {instructor.expertise}</p>
      <p><strong>Experience:</strong> {instructor.experience}</p>

      <button onClick={() => navigate(`/instructors/${instructor.id}`)} >View Details</button>

    </div>

    </>
  )
}

export default InstructorCard
