import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import DroneCard from "./DroneCards";

function Drones() {
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
        <Row style={{ justifyContent: "center", paddingBottom: "10px", paddingLeft: "30px" }}>
          <Col md={4} className="project-card">
            <DroneCard />
          </Col>
          <Col md={4} className="project-card">
            <DroneCard />
          </Col>
					<Col md={4} className="project-card">
						<DroneCard />
					</Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Drones;
