import React from 'react';
import coursesData from '../DATA/coursesData';
import CourseCard from '../COMPONENTS/CourseCard';




const Courses = () => {

  return (
   <>
    
    <div className="bg-dark text-white" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
    {coursesData.map((course) => (
      <CourseCard key={course.id} course={course} />
    ))}
    </div>

  
   </>
  )
}

export default Courses
