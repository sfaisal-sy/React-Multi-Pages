import React from 'react'

import coursesData from '../DATA/coursesData';

const Home = () => {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="bg-dark text-white text-center p-5">
        <h1>Welcome to Our Training Institute</h1>
        <p>Learn in-demand skills and build your career.</p>
        <button className="btn btn-warning">Explore Courses</button>
      </section>
      {/* INTRO SECTION */}
      <section style={{ padding: "30px" }}>
        <h2>About Us</h2>
        <p>
          We provide high quality training programs in IT, Design and Business.
          Our goal is to make students job-ready with practical skills.
        </p>
      </section>

      {/* FEATURED COURSES */}
      <section style={{ padding: "30px", background: "#f9f9f9" }}>
        <h2>Featured Courses</h2>

        {coursesData.slice(0, 3).map((course) => (
          <div key={course.id} style={{ margin: "10px", padding: "10px", border: "1px solid gray" }}>
            <h3>{course.name}</h3>
            <p>{course.description}</p>
          </div>
        ))}

      </section>

      {/* WHY CHOOSE US */}
      <section style={{ padding: "30px" }}>
        <h2>Why Choose Us</h2>
        <ul>
          <li>Experienced Instructors</li>
          <li>Practical Training</li>
          <li>Job-Oriented Courses</li>
          <li>Affordable Fees</li>
        </ul>
      </section>

      {/* CALL TO ACTION */}
      <section style={{ padding: "30px", background: "#222", color: "white", textAlign: "center" }}>
        <h2>Start Your Learning Journey Today</h2>
        <button>Enroll Now</button>
      </section>

    </div>
  );
};

export default Home;