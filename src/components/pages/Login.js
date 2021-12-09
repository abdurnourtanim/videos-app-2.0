import React from "react";
import { Link } from "react-router-dom";
import registerImage from "../../assets/image/login-v2-dark.svg";
import image from "../../assets/image/logo.svg";
import classes from "../../style/Form.module.css";
import LoginForm from "../LoginForm";
import LoginIcon from "../LoginIcon";

const Signup = () => {
  return (
    <>
      <main className={classes.form__content}>
        <div className="">
          <Link to="/" className={classes.brand__logo}>
            <img className="main__logo" src={image} alt="Logo_image" />
            Coding For KiDs
          </Link>
          <div className={classes.content__body}>
            <div
              className={` ${classes.illustration}
            d-none d-lg-flex
            col-lg-8
            align-items-center
            p-5`}
            >
              <div
                className="
                w-100
                d-lg-flex
                align-items-center
                justify-content-center
                px-5
              "
              >
                <img className="img-fluid" src={registerImage} alt="register" />
              </div>
            </div>
            <div
              className={`${classes.register}
            d-flex
             col-lg-4
             align-items-center
              auth-bg
              px-2
              p-lg-5`}
            >
              <div className="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
                <h2 className="card-title fw-bold mb-2">
                  Welcome to coding for kids 👋
                </h2>
                <p className="card-text my-2">
                  Please sign-in to your account and start the adventure
                </p>
                <LoginForm />

                <hr />
                <LoginIcon />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Signup;
