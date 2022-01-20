import React from 'react';
import '../../App.css';
import './Pages.css';

function Team() {
  return (
      <div className="team">
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row card  border-0 flex-md-row justify-content-between align-items-center card-top">
            <a className="col-md-5  order-md-2 order-1 w-md-25" href="#">
              <img className="img-fluid" src="./images/code.jpg" srcset="./images/team.jpg" alt="TNI Management Team" />
            </a>
            <div className="card-body order-2 order-md-1 col-md-7">
              <div className="text-uppercase font-weight-bold mb-4">Management Team</div>
              <h2 className="card-title">
                <a href="#" className="" title="Blog title">
                TNI's Management Team 
                </a>
              </h2>
              <div className="card-text mb-4">
                <p className="">
                  TNI’s management team has over 50 years’ experience in the Technology Industry.  We are focused on delivering top quality service to the end user.  Our team has national capabilities but we are mainly focus on the Southwest, Southeast area. 
                </p>
                <p>
                  Our engineers all have current manufacturer certifications and continually update and improve their certification status. Our deployment teams are led by Sr. Project managers who have years of experience with assorted deployment projects. Our goal is 100% customer satisfaction.
                </p>
              </div>
              <div className="mt-auto d-flex align-items-center pt-2">
                <div className="mr-3">
                  <img className="d-block img-fluid rounded-circle" src="https://via.placeholder.com/40x40/5fa9f8/ffffff" srcset="https://via.placeholder.com/120x120/5fa9f8/ffffff 2x" alt="user" />
                </div>
                <div className="d-block">
                  <div className="font-weight-bold">User Name</div>
                  <div className="text-grey">Dec 14 · 15 min read</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
  )
}

export default Team;
