import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="home-section-1" id="home">

      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <br></br>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />
         
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        {/* <Toolstack /> */}

        <Github />
        <a href="https://github.com/Rkvishnu/github-readme-activity-graph">
          <img
            alt="Vishnu Rathore's Activity Graph"
            src="https://activity-graph.herokuapp.com/graph?username=Rkvishnu&bg_color=0D1117&color=5BCDEC&line=5BCDEC&point=FFFFFF&hide_border=true"
          />
        </a>
      </Container>
    </Container>
  );
}

export default About;
