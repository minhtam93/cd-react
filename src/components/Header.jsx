import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { HOME_PATH } from "../constants/path";
// import {HOME_PATH} from './constants/path'


export default function Header() {
  const toogleMenu = ()=> {
    document.body.classList.toggle('menu-is-show')
  }
  return (
    <header id="header">
      <div className="wrap">
        <div className="menu-hambeger" onClick={toogleMenu}>
          <div className="button">
            <span />
            <span />
            <span />
          </div>
          <span className="text">menu</span>
        </div>
        <Link to={HOME_PATH} className="logo">
          <img src="/img/logo.svg" alt="" />
          <h1>CFD</h1>
        </Link>
        <div className="right">
          <div className="have-login">
            <div className="account">
              <a href="#" className="info">
                <div className="name">Trần Lê Trọng Nghĩa</div>
                <div className="avatar">
                  <img src="/img/avt.png" alt="" />
                </div>
              </a>
            </div>
            <div className="hamberger"></div>
            <div className="sub">
              <a href="#">Khóa học của tôi</a>
              <a href="#">Thông tin tài khoản</a>
              <a href="#">Đăng xuất</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
