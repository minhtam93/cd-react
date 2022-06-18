import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Input from "../components/Input";
import Select from "../components/Select";

export default function Register() {
  const [value, setValue] = useState({});
  const [error, setError] = useState({});

  const onSubmit = (ev) => {
    ev.preventDefault();
    const errorObj = {};
    if (!value?.name?.trim()) {
      errorObj.name = "Họ và tên không được để trống";
    }
    if (!value?.phone?.trim()) {
      errorObj.phone = "Số điện thoại không được để trống";
    }else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(value.phone)){
      errorObj.phone = "Phone không đúng định dạng";
    }
    if (!value?.email?.trim()) {
      errorObj.email = "Email không được để trống";
    }else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value.email)){
      errorObj.email = "Email không đúng định dạng";
    }
    if (!value?.fb?.trim()) {
      errorObj.fb = "Facebook url không được để trống";
    }else if (!/(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/.test(value.fb)){
      errorObj.fb = "Email không đúng định dạng";
    }
    if (!value?.payment) {
      errorObj.payment = "Vui lòng chọn hình thức thanh toán";
    }
    setError(errorObj);

    if(Object.keys(errorObj).length === 0) {
      alert('validate thanh cong')
    }
  };

  return (
    <main className="register-course" id="main">
      <section>
        <div className="container">
          <div className="wrap container">
            <div className="main-sub-title">ĐĂNG KÝ</div>
            <h1 className="main-title">Thực chiến front-end căn bản </h1>
            <div className="main-info">
              <div className="date">
                <strong>Khai giảng:</strong> 15/11/2020
              </div>
              <div className="time">
                <strong>Thời lượng:</strong> 18 buổi
              </div>
              <div className="time">
                <strong>Học phí:</strong> 6.000.000 VND
              </div>
            </div>
            <form className="form" onSubmit={onSubmit}>
              <Input
                label="Họ và tên"
                required
                placeholder="Họ và tên bạn"
                onChange={(ev) => (value.name = ev.target.value)}
                error={error.name}
              />
              <Input
                label="Số điện thoại"
                required
                placeholder="Số điện thoại"
                onChange={(ev) => (value.phone = ev.target.value)}
                error={error.phone}
              />
              <Input
                label="Email"
                required
                placeholder="Email của bạn"
                onChange={(ev) => (value.email = ev.target.value)}
                error={error.email}
              />
              <Input
                label="URL Facebook"
                required
                placeholder="https://facebook.com"
                onChange={(ev) => (value.fb = ev.target.value)}
                error={error.fb}
              />
              <label className="disable">
                <p>Sử dụng COIN</p>
                <div className="checkcontainer">
                  Hiện có <strong>300 COIN</strong>
                  <input type="checkbox" defaultChecked="checked" />
                  <span className="checkmark" />
                </div>
              </label>
              <Select 
              label= "Hình thức thanh toán" 
              placeholder="---Hình thức thanh toán---"
              options = {
                [
                  'Chuyển khoản',
                  "Thanh toán bằng tiền mặt"
                ]
              }
             error = {error.payment}
             onChange={val=> value.payment = val}
                />
              <Input
                onChange={ev => value.note = ev.target.value}
                label="Ý kiến cá nhân"
                placeholder="Mong muốn cá nhân và lịch bạn có thể học."
              />
              <button className="btn main rect">đăng ký</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
