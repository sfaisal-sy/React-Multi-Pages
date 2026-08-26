import React from 'react';
import coursesData from '../DATA/coursesData';
import CourseCard from '../COMPONENTS/CourseCard';




const Courses = () => {

  return (
   <>
    <h2>COURSE PAGE</h2>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
    {coursesData.map((course) => (
      <CourseCard key={course.id} course={course} />
    ))}
    </div>

  
   </>
  )
}

export default Courses
