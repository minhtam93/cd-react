import React from "react";
import { generatePath, Link, Navigate, useNavigate } from "react-router-dom";
import CourseCard from "../../components/CourseCard";
import { COURSE_DETAIL_PATH } from "../../constants/path";
import { useCourse } from "../../hooks/useCourse";
// import { abc } from '../../utils/abc'

export default function Course() {
  // const navigate = useNavigate()
  const courses = useCourse();
  console.log("index", courses);
  // const courseDetail =  {
  //   slug: "aaa",
  //   id: 17
  // }
  return (
    <main className="homepage" id="main">
      {/* <Navigate to="/"/> */}
      <section className="section-1">
        <div className="container">
          <h2 className="main-title">KHÓA HỌC CFD</h2>
          <p className="top-des">
            The readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
          </p>
          <div className="textbox">
            <h3 className="sub-title">KHÓA HỌC</h3>
            <h2 className="main-title">ONLINE</h2>
          </div>
          <div className="list row">
            {courses.map(course => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
