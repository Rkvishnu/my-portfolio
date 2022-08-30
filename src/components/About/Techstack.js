import React from "react";
import { Col, Row } from "react-bootstrap";
 

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
          <Col xs={4} md={2} className="tech-icons">
            <a href="https://isocpp.org/">
              <img
                src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/100/000000/external-cplusplus-a-general-purpose-descriptive-programming-computer-language-logo-shadow-tal-revivo.png"
                alt=""
              />
            </a>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <a href="https://html.com/html5/">
              {" "}
              <img
                src="https://img.icons8.com/color/100/000000/html-5--v1.png"
                alt=""
              />{" "}
            </a>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <a href="https://tailwindcss.com/">
              {" "}
              <img
                src="https://img.icons8.com/color/100/000000/tailwindcss.png"
                alt=""
              />{" "}
            </a>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              {" "}
              <img
                src="https://img.icons8.com/color/100/000000/javascript.png"
                alt=""
              />{" "}
            </a>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <a href="https://nextjs.org/">
              {" "}
              <img
                src="https://img.icons8.com/color/100/000000/nextjs.png"
                alt=""
              />{" "}
            </a>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <a href="https://www.typescriptlang.org/">
              {" "}
              <img
                src="https://img.icons8.com/color/100/000000/typescript.png"
                alt=""
              />{" "}
            </a>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <a href="https://reactjs.org/">
              {" "}
              <img
                src="https://img.icons8.com/color/100/000000/react-native.png"
                alt=""
              />{" "}
            </a>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <a href="https://nodejs.org">
              {" "}
              <img
                src="https://img.icons8.com/color/100/000000/nodejs.png"
                alt=""
              />{" "}
            </a>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <a href="https://www.python.org">
              {" "}
              <img
                src="https://img.icons8.com/color/100/000000/python.png"
                alt=""
              />{" "}
            </a>
          </Col>

          <Col xs={4} md={2} className="tech-icons">
            <a href="https://www.mongodb.com/">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                alt="mongodb"
                width="100"
                height="100"
              />{" "}
            </a>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <a href="https://firebase.google.com/">
              {" "}
              <img
                src="https://img.icons8.com/color/100/000000/firebase.png"
                alt=""
              />{" "}
            </a>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <a href="https://www.mysql.com/">
              {" "}
              <img
                src="https://img.icons8.com/fluent/100/000000/mysql-logo.png"
                alt=""
              />{" "}
            </a>
          </Col>
       
    </Row>
  );
}

export default Techstack;
