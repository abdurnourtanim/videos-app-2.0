import React from "react";
import classes from "../../style/Home.module.css";
import Footer from "../Footer";
import Nav from "../Nav";
import VideoCard from "../VideoCard";

const Home = () => {
  return (
    <>
      <Nav />

      <section className={classes.home__content}>
        <div className="container">
          <div className={`row ${classes.card__content} mt-3`}>
            <VideoCard
              page="tailwindCss"
              image={`http://img.youtube.com/vi/${"aQS7kaje-24"}/maxresdefault.jpg`}
              heading="Tailwind css"
              title="Tailwind Just in Time Tutorial"
            />
            <VideoCard
              page="javascript"
              image={`http://img.youtube.com/vi/${"VFthJDRgHtU"}/maxresdefault.jpg`}
              heading="Javascript"
              title="The Modern JavaScript 2021 | Bangla Tutorial | ES6 & Advanced Topics"
            />

            <VideoCard
              page="freelancerQNA"
              image={`http://img.youtube.com/vi/${"ZGF_CZsU_MI"}/maxresdefault.jpg`}
              heading="How to became a freelancer?"
              title="ফ্রিল্যান্সিং শিখবেন? সকল পরামর্শ নিচে আছে ফ্রিল্যান্সিং শিখবেন?"
            />
            <VideoCard
              page="javascript"
              image={`http://img.youtube.com/vi/${"VFthJDRgHtU"}/maxresdefault.jpg`}
              heading="Javascript"
              title="The Modern JavaScript 2021 | Bangla Tutorial | ES6 & Advanced Topics"
            />
            <VideoCard
              page="javascript"
              image={`http://img.youtube.com/vi/${"VFthJDRgHtU"}/maxresdefault.jpg`}
              heading="Javascript"
              title="The Modern JavaScript 2021 | Bangla Tutorial | ES6 & Advanced Topics"
            />
            <VideoCard
              page="tailwindCss"
              image={`http://img.youtube.com/vi/${"aQS7kaje-24"}/maxresdefault.jpg`}
              heading="Tailwind css"
              title="Tailwind Just in Time Tutorial"
            />
            <VideoCard
              page="freelancerQNA"
              image={`http://img.youtube.com/vi/${"ZGF_CZsU_MI"}/maxresdefault.jpg`}
              heading="How to became a freelancer?"
              title="ফ্রিল্যান্সিং শিখবেন? সকল পরামর্শ নিচে আছে ফ্রিল্যান্সিং শিখবেন?"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
