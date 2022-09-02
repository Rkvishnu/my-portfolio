import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
  SiAndroidstudio,
  SiHeroku,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
            <a href=" ">
              {" "}
              <img
                src="../../Assets/hardhat.svg"
                alt=""
              />{" "}
            </a>
          </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
      <Col xs={4} md ={2} className ="tech-icons">
        <SiNetlify/>
      </Col>
    </Row>
  );
}

export default Toolstack;
