import { useEffect, useState } from "react";
import courseService from "../services/course";

export const useCourse = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    courseService.get()
    .then((res) => {
      setCourses(res.data);
    });
  }, []);

  return courses
};
