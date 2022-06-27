import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import CourseCard from "../../components/CourseCard";
import api from "../../constants/api";
import { useCourse } from "../../hooks/useCourse";
import { useQuery } from "../../hooks/useQuery";
import courseService from "../../services/course";
import { Skeleton } from "@mui/material";
import { generatePath, Link } from "react-router-dom";
import { REGISTER_PATH } from "../../constants/path";
import styled from "styled-components";
import PageLoading from "../../components/PageLoading";
import Accordion from "../../components/Accordion";

export default function CourseDetail() {
  const { id } = useParams();
  const { courses } = useCourse();
  const { data: course, isLoading } = useQuery(
    () => courseService.getDetail(id),
    [id]
  );

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  // const [randomCourses, setCourse] = useState([]);
  // useEffect(() => {
  //   let i = 0;
  //   const newArr = [];
  //   while (i < 3) {
  //     newArr[i] = courses[Math.floor(Math.random() * courses.length)];
  //     i++;
  //   }
  //   setCourse(newArr);
  // }, [courses[0]]);

  return (
    <main className="course-detail" id="main">
      <section className="banner style2" style={{ "--background": "#cde6fb" }}>
        <div className="container">
          <div className="info">
            {isLoading ? (
              <Skeleton animation="wave" width={700} height={105} />
            ) : (
              <>
                <h1>{course.title}</h1>
                <div className="row">
                  <div className="date">
                    <strong>Khai giảng:</strong> {course.opening_time}
                  </div>
                  <div className="time">
                    <strong>Thời lượng:</strong> {course.count_video} buổi
                  </div>
                </div>
              </>
            )}

            <Link
              to={generatePath(REGISTER_PATH, { id })}
              className="btn white round"
              style={{ "--colorBtn": "#70b6f1" }}
            >
              đăng ký
            </Link>
          </div>
        </div>
        <div className="bottom">
          <div className="container">
            <div className="video">
              <div className="icon">
                <img src="/img/play-icon-white.png" alt="" />
              </div>{" "}
              <span>giới thiệu</span>
            </div>
            <div className="money">{course.money} VND</div>
          </div>
        </div>
      </section>
      <section className="section-2">
        <div className="container">
          {isLoading ? (
            <Skeleton animation="wave" variant="rectangular" height={400} />
          ) : (
            <p className="des">{course.long_description}</p>
          )}
          <h2 className="title">giới thiệu về khóa học</h2>
          <div className="cover">
            <img src="/img/course-detail-img.png" alt="" />
          </div>
          <h3 className="title">nội dung khóa học</h3>
          <Accordion.Group>
            {course?.content?.map((e, i) => (
              <Accordion key={i} date={i + 1} title={e.title}>
                {e.content}
              </Accordion>
            ))}
          </Accordion.Group>
          <h3 className="title">yêu cầu cần có</h3>
          <div className="row row-check">
            {course?.required?.map((required) => (
              <div className="col-md-6">{required.content}</div>
            ))}
          </div>
          <h3 className="title">hình thức học</h3>
          <div className="row row-check">
            <div className="col-md-6">
              Học offline tại văn phòng, cùng Trần Nghĩa và 3 đồng nghiệp.
            </div>
            <div className="col-md-6">
              Dạy và thực hành thêm bài tập online thông qua Skype.
            </div>
            <div className="col-md-6">
              Được các mentor và các bạn trong team CFD hổ trợ thông qua group
              CFD Facebook hoặc phần mềm điều khiển máy tính.
            </div>
            <div className="col-md-6">
              Thực hành 2 dự án thực tế với sự hướng dẫn của CFD Team.
            </div>
          </div>
          <h3 className="title">
            <div className="date-start">lịch học</div>
            <div className="sub">
              *Lịch học và thời gian có thể thống nhất lại theo số đông học
              viên.
            </div>
          </h3>
          <p>
            <strong>Ngày bắt đầu: </strong> {course.opening_time} <br />
            <strong>Thời gian học: </strong> {course.schedule}
          </p>
          <h3 className="title">Người dạy</h3>
          <div className="teaches">
            <div className="teacher">
              <div className="avatar">
                <img src={course.teacher?.avatar} alt="" />
              </div>
              <div className="info">
                <div className="name">{course?.teacher?.title}</div>
                <div className="title">{course.teacher?.position}</div>
                <p className="intro">{course.teacher?.description}</p>
                {course.teacher?.website !== null && (
                  <p>
                    <strong>Website:</strong>{" "}
                    <a href="#">{course.teacher?.website}</a>
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="user">
              <img src="/img/user-group-icon.png" alt="" /> {course.author} bạn
              đã đăng ký
            </div>
            <Link
              to={generatePath(REGISTER_PATH, { id })}
              className="btn main btn-register round"
            >
              đăng ký
            </Link>
            <div className="btn-share btn overlay round btn-icon">
              <img src="/img/facebook.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="section-3">
        <div className="container">
          <div className="textbox">
            <h3 className="sub-title">DỰ ÁN</h3>
            <h2 className="main-title">THÀNH VIÊN</h2>
          </div>
          <div className="list row">
            <div className="col-md-4 course">
              <div className="wrap">
                <a href="#" className="cover">
                  <img src="/img/img.png" alt="" />
                </a>
                <div className="info">
                  <a className="name" href="#">
                    React JS
                  </a>
                  <p className="des">
                    One of the best corporate fashion brands in Sydney
                  </p>
                </div>
                <div className="bottom">
                  <div className="teacher">
                    <div className="avatar">
                      <img src="/img/avt.png" alt="" />
                    </div>
                    <div className="name">Vương Đặng</div>
                  </div>
                  <div className="register-btn">Đăng Ký</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 course">
              <div className="wrap">
                <a href="#" className="cover">
                  <img src="/img/img2.png" alt="" />
                </a>
                <div className="info">
                  <a className="name" href="#">
                    Animation
                  </a>
                  <p className="des">
                    One of the best corporate fashion brands in Sydney
                  </p>
                </div>
                <div className="bottom">
                  <div className="teacher">
                    <div className="avatar">
                      <img src="/img/avt.png" alt="" />
                    </div>
                    <div className="name">Trần Nghĩa</div>
                  </div>
                  <div className="register-btn">Đăng Ký</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 course">
              <div className="wrap">
                <a href="#" className="cover">
                  <img src="/img/img3.png" alt="" />
                </a>
                <div className="info">
                  <a className="name" href="#">
                    Scss, Grunt JS và Boostrap 4
                  </a>
                  <p className="des">
                    One of the best corporate fashion brands in Sydney
                  </p>
                </div>
                <div className="bottom">
                  <div className="teacher">
                    <div className="avatar">
                      <img src="/img/avt.png" alt="" />
                    </div>
                    <div className="name">Trần Nghĩa</div>
                  </div>
                  <div className="register-btn">Đăng Ký</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-4">
        <div className="container">
          <div className="textbox">
            <h3 className="sub-title">Khóa học</h3>
            <h2 className="main-title">Liên quan</h2>
          </div>
          <div className="list row">
            {courses
              .filter((e, i) => i < 3)
              .map((ev, i) => (
                <CourseCard key={ev.id} {...ev} />
              ))}
            {/* {
                 randomCourses.map((e,i)=> (
                  <CourseCard key={i} {...e} />
                ))
              } */}
          </div>
        </div>
      </section>
    </main>
  );
}
