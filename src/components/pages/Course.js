import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseItem from "../CourseItem";
import Footer from "../Footer";
import Nav from "../Nav";

const Course = () => {
  const { page } = useParams();
  const [title, setTitle] = useState();

  useEffect(() => {
    if (page === "javascript") {
      setTitle(
        "The Modern JavaScript 2021 | Bangla Tutorial | ES6 & Advanced Topics"
      );
    } else if (page === "freelancerQNA") {
      setTitle("ফ্রিল্যান্সিং শিখবেন? সকল পরামর্শ নিচে আছে");
    } else if (page === "tailwindCss") {
      setTitle("Tailwind Just in Time Tutorial");
    } else {
      setTitle("Title Not Found!");
    }
  }, [page]);

  return (
    <>
      <Nav />
      <CourseItem title={title} item={page} />
      <Footer />
    </>
  );
};

export default Course;
