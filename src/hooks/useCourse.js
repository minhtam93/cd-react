import { useEffect, useState } from "react";
import courseService from "../services/course";

export const useCourse = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading,setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    courseService.get()
    .then((res) => {
      setCourses(res.data);
      setIsLoading(false)
    });
  }, []);

  return {courses, isLoading}
};
