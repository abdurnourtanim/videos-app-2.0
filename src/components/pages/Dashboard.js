import React from "react";
import image from "../../assets/image/badge.7bf0a10d.svg";
import { useAuth } from "../../Auth";
import classes from "../../style/Dashboard.module.css";
import Madel from "../Madel";
import Sidebar from "../Sidebar";
import StatisticsItem from "../StatisticsItem";
// import Nav from "../Nav";

const Dashboard = () => {
  const { currentUser } = useAuth();
  return (
    <>
      <header className={classes.dashboard__container}>
        {/* <Nav /> */}
        <Sidebar />

        <section className={`${classes.dashboard} mb-3`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <Madel user={currentUser} image={image} />
              </div>
              <div className="col-lg-8 col-md-12 mt-lg-0 mt-5">
                <div className={classes.statistics}>
                  <div
                    className="
                  card-header
                  d-flex
                  justify-content-between
                  align-items-start
                "
                  >
                    <h4 className="card-title">statistics</h4>
                    <div className="d-flex align-items-center">
                      <p className="card-text text-muted font-small-2 me-25 mb-0">
                        Updated 1 month ago
                      </p>
                    </div>
                  </div>
                  <div
                    className={`card-body py-3 py-lg-5 ${classes.card_body}`}
                  >
                    <div
                      className={`
                      row
                      justify-content-center
                      align-items-center
                      text-center
                      ${classes.card__body__row}
                      `}
                    >
                      <StatisticsItem
                        icon="fas fa-chart-line"
                        head="230k"
                        name="Sales"
                      />
                      <StatisticsItem
                        icon="far fa-user"
                        head="8.549k"
                        name="Customers"
                        bg="bg-success"
                      />
                      <StatisticsItem
                        icon="fab fa-laravel"
                        head="1.423k"
                        name="Products"
                        bg="bg-danger"
                      />
                      <StatisticsItem
                        icon="fas fa-dollar-sign"
                        head="$9745"
                        name="Revenue"
                        bg="bg-warning"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Dashboard;
