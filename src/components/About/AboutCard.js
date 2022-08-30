import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rob Meyer </span>
            from <span className="purple"> North Potomac, Maryland</span>
            <br />I have 8 years of Professional Experience across multiple
            industries.
            <br />I am based in Columbus, OH with my Wife Jen and Dog Maui!
            <br />
            <br />
            Apart from development, and testing some other activities that I
            love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Drone Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> College and Pro Sports Fan
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Only you can master your mind, which is what it takes to live a
            bold life filled with accomplishments most people consider beyond
            their capability."{" "}
          </p>
          <footer className="blockquote-footer">David Goggins</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
