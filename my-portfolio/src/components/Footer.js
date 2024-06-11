import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (

    <footer className="footer" id="footer">
      <Container>
        <Row className="align-items-center">
          <Col className="text-center">
            <h1>You can find me on</h1>
            <h5>Feel open to reach out anytime</h5>
          </Col>
        </Row>
        <br />
        <Row className="align-items-center">
          <Col className="text-center">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/daniel-razal/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="Linkedin" />
              </a>
              <a href="https://github.com/DanielRazal" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="Github" />
              </a>
              <a href="https://www.instagram.com/daniel_r129/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
