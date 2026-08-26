import React from 'react';
import instructorData from '../DATA/instructorData'
import InstructorCard from '../COMPONENTS/InstructorCard'

const Instructors = () => {
  return (
    <>
        <h2>INSTRUCTORS PAGE</h2>
       {instructorData.map((instructor) => (
        <InstructorCard key={instructor.id} instructor={instructor} />
       ))}
    </>
  )
}

export default Instructors
