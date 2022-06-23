import React from "react";
import className from "classnames";
import { generatePath, Link } from "react-router-dom";
import { COURSE_DETAIL_PATH } from '../constants/path'

const STATUS = {
    "dang-dien-ra": "Đang diễn ra",
    "da-ket-thuc": "Đã kết thúc",
    "sap-khai-gian": "Sắp khai giảng"
}

export default function CourseCard({
  title,
  course_status,
  short_description,
  order,
  thumbnailUrl,
  slug,
  id,
  teacher,
}) {

const path = generatePath(COURSE_DETAIL_PATH,{ slug,id })

  return (
    <div className="col-md-4 course">
      <div className="wrap">
        <Link className="cover" to={path}>
          <img src={thumbnailUrl} alt="" />
          <span className={className('badge',{
                b1: course_status === "da-ket-thuc",
                b2: course_status === "dang-dien-ra",
                b3: course_status ==="sap-khai-gian"
          })}>{STATUS[course_status]}</span>
          <div className="hover">
            <div className="top">
              <div className="user">
                <img src="/img/icon-user-white.svg" alt="" />
                {order}
              </div>
              <div className="heart">
                <img src="/img/icon-heart.svg" alt="" /> 100
              </div>
            </div>
            <div className="share">
              <img src="/img/icon-viewmore.svg" alt="" />
            </div>
          </div>
        </Link>
        <div className="info">
          <Link className="name" to={path}>
            {title}
          </Link>
          <p className="des">{short_description}</p>
        </div>
        <div className="bottom">
          <div className="teacher">
            <div className="avatar">
              <img src={teacher.avatar} alt="" />
            </div>
            <div className="name">{teacher.title}</div>
          </div>
          <div className="register-btn">Đăng Ký</div>
        </div>
      </div>
    </div>
  );
}
