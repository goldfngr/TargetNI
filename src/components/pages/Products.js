import React from 'react';
import '../../App.css';
import './Pages.css';

function Products() {
  return (
      <div className="products">
        <section className="pt-5 pb-5">
        <div className="container">
          <div className="row card  border-0 flex-md-row justify-content-between align-items-center card-top">
            <a className="col-md-5  order-md-2 order-1 w-md-25" href="#">
              <img className="img-fluid" src="./images/img-7.jpg" srcset="./images/img-7.jpg" alt="javascript code" />
            </a>
            <div className="card-body order-2 order-md-1 col-md-7">
              <div className="text-uppercase font-weight-bold mb-4">Network Services</div>
              <h2 className="card-title">
                <a href="#" className="" title="Blog title">
                TNI Network Services include: 
                </a>
              </h2>
              <div className="card-text mb-4">
                Design Develop Scope, Project Management, Install, and Performance Testing.<br />

               <span>LAN/ WLAN/ WAN Expertise</span>: Cisco, Meraki, Aruba, HP, Dell, Extreme and Rukus Security Expertise: Palo Alto, Fortinet, Cisco, Barracuda and SonicWall
               <hr />
               
               <h4>Audio Visual </h4>
                Consulting, Design, Implementation, Testing &amp; Tuning, Project Management<br />

                Expertise: Classroom Design, Interactive Flat Panels, Projector Solutions, Audio Amplification, Microphone Systems, Televisions, Digital Cameras, Projection Screens and Esports Rooms.

              <hr />
               <h4>Client Services</h4>
	
              Consulting, White Glove, Imaging, Etching, Mobile Cart, Project Management

              Expertise: Google White Glove, OU Placements, Asset Management, Testing Center Configurations, Large Client Deployments, Logo Laser-Etching, Peripheral Installations
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


    export default Products;