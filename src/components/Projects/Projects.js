import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
 
import DAO_project_solidity from "../../Assets/Projects/DAO-Project-Solidity.png";
import cryptocurrencies from "../../Assets/Projects/cryptocurrency.png";
import Defi_Exchange from "../../Assets/Projects/Defi-Exchange-Project.png";
import PortFolio from "../../Assets/Projects/PortFolio-Js.png";
// import  weather_app from "../../Assets/Projects/weather-App-Javascript.png";
import  New_year from "../../Assets/Projects/New-year.png";
import  bitsOfCode from "../../Assets/Projects/about.png";
import Open_sea from "../../Assets/Projects/8.png"
import crowdfunding from "../../Assets/Projects/crowdfunds.png"

import lottery from "../../Assets/Projects/lottery-game.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crowdfunding}
              isBlog={false}
              title="Web3-CrowdFunding-dApp"
              description="Built a Decentralised Application where user can come and create a campaign for taking funding directly from public."
              ghLink="https://github.com/Rkvishnu/web3-dapp"
              demoLink="https://web3-fundraiser-youtube.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Defi_Exchange}
              isBlog={false}
              title="Defi-Exchange-Project"
              description="Built a Decentralised Application Where when user adds liquidity in Ether, they are given Crypto Dev LP tokens (Liquidity Provider tokens) propotional to the Ether."
              ghLink="https://github.com/Rkvishnu/defi-dex-dApp"
              demoLink="https://defi-dex-dapp.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lottery}
              isBlog={false}
              title="Lottery-Game-Chainlink"
              description="Built a Decentralised Lottery game application using Next.JS,chainlink-VRfs,Polygon Blockchain,Solidity. where useris choosen randomly and wins the entire lottery pool. "
              ghLink="https://github.com/Rkvishnu/lottery-game-chainlink"
              demoLink="https://lottery-game-chainlink.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DAO_project_solidity}
              isBlog={false}
              title="Ethereum-DAO-Project"
              description="Built a Decentralised application where a DAO member with DAO Token Holder can create a proposal to buy an NFT"
              ghLink="https://github.com/Rkvishnu/dao_project"
              demoLink="https://dao-project-lw3.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Open_sea}
              isBlog={false}
              title="OpenSea-Clone"
              description="Built a clone project of one of the world's largest ethereum based NFT-listing platform OpensSea "
              ghLink="https://github.com/Rkvishnu/openSea-clone"
              demoLink="https://open-sea-clone-eta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cryptocurrencies}
              isBlog={false}
              title="Crypto-Hunter"
              description="Using Reactjs ,Material-Ui built a project where we can track the live pricing of various cryptocurrencies slike Bitcoin,Ethereum etc using CoinGecko-api with firebase as backend "
              ghLink="https://github.com/Rkvishnu/cryptos"
              demoLink="https://crypto-jade-psi.vercel.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={New_year}
              isBlog={false}
              title="CountDown App"
              description="countdown application using HTML,CSS,JAVASCRIPT.."
              ghLink="https://github.com/Rkvishnu/Count-Down-app"
              demoLink="https://count-down-app-omega.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PortFolio}
              isBlog={false}
              title="CountDown App"
              description="created an portfolio website using HTML,CSS and JAVASCRIPT."
              ghLink=""
              demoLink="https://portfolio-website-phi-wheat.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
