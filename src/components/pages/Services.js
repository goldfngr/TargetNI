import React from 'react';
import '../../App.css';
import './Pages.css';

function Services() {
  return (
      <div className="services">
        <section className="pt-5 pb-5">
        <div className="container">
          <div className="row card  border-0 flex-md-row justify-content-between align-items-center card-top">
            <a className="col-md-5  order-md-2 order-1 w-md-25" href="#">
              <img className="img-fluid" src="./images/code.jpg" srcset="./images/code.jpg" alt="javascript code" />
            </a>
            <div className="card-body order-2 order-md-1 col-md-7">
              <div className="text-uppercase font-weight-bold mb-4">Services</div>
              <h2 className="card-title">
                <a href="#" className="" title="Blog title">
                TNI has a broad range of service offerings for our 
                </a>
              </h2>
              <div className="card-text mb-4">
                <p className=""> Value Added Reseller partners/customers to utilize. But first we start with developing the initial solution development plan.   Then we work closely with our Value Added Reseller partners to develop a “Statement Of Work” SOW and then when the end user customer agrees to the plan we develop a timetable of events.  After completion of the project we review and survey the end customer and VAR partner to determine satisfaction level.</p>

                <h3>Our Service Offerings include:</h3>
                <ul>
                  <li>Large Scale WAN and LAN updating and deploying.</li>
                  <li>Total Network development.</li>
                  <li>Large scale computer deployment.</li>
                  <li>Data center updates.</li>
                  <li>Digital Signage- Installation, Development and Maintenance</li>
                </ul>
              </div>
              <div className="mt-auto d-flex align-items-center pt-2">
                <div className="mr-3">
                  <img className="d-block img-fluid rounded-circle" src="https://via.placeholder.com/40x40/5fa9f8/ffffff " srcset="https://via.placeholder.com/120x120/5fa9f8/ffffff 2x" alt="user" />
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

export default Services;
