import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Project.css"
import faasosimg from "../../assets/Home/faasosimg.png";
import koovsimg from "../../assets/Home/koovsimg.png";
import policyimg from "../../assets/Home/policybaazarfront.png"

import Particle from "./Particle";
import ProjectCards from "./ProjectCards";


function Projects() {
  return (
    <div className="home-container" id="project">

    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
        <Col md={6} className="project-card">
            <ProjectCards
              imgPath={koovsimg}
              isBlog={false}
              title="KindMeal.com Clone"
              description={<div className="project-card-text"><p>This is the Clone of KindMeal.com an online vegetarian food restaurant.
                We were a team of five members and made this project in 5 days during the Unit-2 construct week 
                at Masai School.This website have cool features like user authentication,sorting ,filtering ,
                360 degree view of product,coupons and many more. </p>
                <h3>Tech Stack:</h3><p>HTML5, CSS, JAVASCRIPT</p></div>}
              link="https://github.com/ramanabandapu/KindMeal---clone/tree/main/kindmeal-clone-project-master" target="_blank"
              // link2="https://github.com/pankaj5417/koovs.git" target="_blank"

            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={faasosimg}
              isBlog={false}
              title="Farfetch.com Clone"
              description={<div  className="project-card-text"><p>This is the Clone of Farfetch.com an online fashion products store web app.
                An individual project built in 5 days during the Unit-2 construct
                 week at Masai School.This website consists of many cool functalities like user authentication, filtering, add to cart, payment and checkout pagecoupon and many more.  </p>
                  <h3>Tech Stack:</h3> <p>HTML5,CSS,JAVASCRIPT,API,MOCK SERVER</p></div>}
              link="https://github.com/ramanabandapu/Farfetch---clone" target="_blank"
              // link2="https://github.com/pankaj5417/Faasos-clone.git" target="_blank"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={faasosimg}
              isBlog={false}
              title="ZaraHome.com Clone"
              description={<div  className="project-card-text"><p>This is the Clone of ZaraHome.com an online web application for interior designing products.
                We were a team of 5 members and made this web app in 5 days during the Unit-3 construct
                 week at Masai School.This website consists of many cool functalities like filtering ,
                  search with debouncing,api,location based address,coupon and many more.  </p>
                  <h3>Tech Stack:</h3> <p>HTML5,CSS,JAVASCRIPT,API,MOCK SERVER </p></div>}
              link="https://github.com/ramanabandapu/zara-home-responsive/tree/main/zara%20home-unit4-responsive" target="_blank"
              // link2="https://github.com/pankaj5417/FaasosClone2.git" target="_blank"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={policyimg}
              isBlog={false}
              title="ZaraHome.com Clone"
              description={<div  className="project-card-text"><p>This is the Clone of ZaraHome.com an online web application for interior designing products.
                We were a team of 5 members and made this web app in 5 days during the Unit-4 construct
                 week at Masai School.This website consists of many cool functalities like filtering ,
                  search with debouncing,api,location based address,coupon and many more..  </p>
                  <h3>Tech Stack:</h3> <p>HTML5, CSS, JAVASCRIPT, MONGODB, EXPRESS, NODEJS </p></div>}
              link="https://github.com/ramanabandapu/zara-home-responsive/tree/main/zara%20home-unit4-responsive" target="_blank"
              // link2="https://github.com/pankaj5417/policy-bazaar-clone.git" target="_blank"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
    </div>
  );
}

export default Projects;
