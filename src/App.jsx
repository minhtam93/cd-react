import { useEffect, useState } from "react";
// import ToDoList from "./components/ToDoList";
import Register from "./pages/register";
import Header from "./components/Header";
import Siderbar from "./components/Sidebar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import Contact from "./pages/contact";
import Course from "./pages/course/index";
import CourseDetail from "./pages/course/[slug][id]";
import Page404 from "./pages/404";
import {
  CONTACT_PATH,
  COURSE_DETAIL_PATH,
  COURSE_PATH,
  HOME_PATH,
  PROFILE_PATH,
  PROFILE_PAYMENT_PATH,
  PROFILE_PROJECT_PATH,
  PROFILE_COURSE_PATH,
  PROFILE_COIN_PATH,
  REGISTER_PATH,
  TEAM_PATH,
  PROJECT_PATH
} from "./constants/path";
import MainLayout from "./layouts/MainLayout";
import Profile from "./pages/profile/index";
import ProfileLayout from "./layouts/ProfileLayout";
import ProfileProject from "./pages/profile/project";
import ProfileCoin from "./pages/profile/coin";
import ProfilePayment from "./pages/profile/payment";
import ProfileCourse from "./pages/profile/course";
import Team from "./pages/team";
import Project from "./pages/project";
import {AuthProvider} from './hooks/useAuth'


// console.log(AuthContext)

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path={HOME_PATH} element={<Home />}></Route>
          <Route path={REGISTER_PATH} element={<Register />}></Route>
          <Route path={TEAM_PATH} element={<Team />}></Route>
          <Route path={PROJECT_PATH} element={<Project />}></Route>
          <Route path={CONTACT_PATH} element={<Contact />}></Route>
          <Route path={COURSE_PATH}>
            <Route index element={<Course />}></Route>
            <Route path={COURSE_DETAIL_PATH} element={<CourseDetail />}></Route>
          </Route>
          <Route path={PROFILE_PATH} element={<ProfileLayout />}>
            <Route index path={PROFILE_PATH} element={<Profile/>}></Route>
            <Route path={PROFILE_PROJECT_PATH} element={<ProfileProject/>}></Route>
            <Route path={PROFILE_COIN_PATH} element={<ProfileCoin/>}></Route>
            <Route path={PROFILE_PAYMENT_PATH} element={<ProfilePayment/>}></Route>
            <Route path={PROFILE_COURSE_PATH} element={<ProfileCourse/>}></Route>
         </Route>
          <Route path="*" element={<Page404 />}></Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
