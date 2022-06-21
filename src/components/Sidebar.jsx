import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { CONTACT_PATH, COURSE_PATH, HOME_PATH } from "../constants/path";

const LinkWrap = styled.li`
  a {
    &.active {
      background: #00afab;
      color: #fff;
      transition: all 0.4s;
    }
  }
`;

export default function Siderbar() {
  const closeSidebar = () => {
    document.body.classList.remove("menu-is-show");
  };
  return (
    <>
      <nav className="nav">
        <ul>
          <LinkWrap className="li_login">
            <NavLink onClick={closeSidebar} to="/dang-ky">
              Đăng ký / Đăng nhập
            </NavLink>
          </LinkWrap>
          <LinkWrap>
            <NavLink onClick={closeSidebar} to={HOME_PATH}>
              Trang chủ
            </NavLink>
          </LinkWrap>
          <LinkWrap>
            <NavLink onClick={closeSidebar} to="/team">
              CFD Team
            </NavLink>
          </LinkWrap>
          <LinkWrap>
            <NavLink onClick={closeSidebar} to={COURSE_PATH}>
              Khóa Học
            </NavLink>
          </LinkWrap>
          <LinkWrap>
            <NavLink onClick={closeSidebar} to="/project">
              Dự Án
            </NavLink>
          </LinkWrap>
          <LinkWrap>
            <NavLink onClick={closeSidebar} to={CONTACT_PATH}>
              Liên hệ
            </NavLink>
          </LinkWrap>
        </ul>
      </nav>
      <div className="overlay_nav" onClick={closeSidebar} />
    </>
  );
}
