import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HOME_PATH, PROFILE_PATH } from "../constants/path";
import { AuthProvider, useAuth } from "../hooks/useAuth";
// import {HOME_PATH} from './constants/path'

export default function Header() {
  const { user, onLogin, onLogout } = useAuth();

  const toogleMenu = () => {
    document.body.classList.toggle("menu-is-show");
  };

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
          {user ? (
            <div className="have-login">
              <div className="account">
                <a href="#" className="info">
                  <div className="name">{user.name}</div>
                  <div className="avatar">
                    <img src={user.avatar} alt="" />
                  </div>
                </a>
              </div>
              <div className="hamberger"></div>
              <div className="sub">
                <a href="#">Khóa học của tôi</a>
                <Link to={PROFILE_PATH}>Thông tin tài khoản</Link>
                <a href="#" onClick={onLogout}>Đăng xuất</a>
              </div>
            </div>
          ) : (
            <div className="not-login bg-none" onClick={onLogin}>
              <a href="javascript:void()" className="btn-register">
                Đăng nhập
              </a>
              <a href="login.html" className="btn main btn-open-login">
                Đăng ký
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
