import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import JPetStore from "../assets/img/JPetStore.png"
import RDC from "../assets/img/RDC.png"
import ReFormat from "../assets/img/ReFormat.png"

export const Projects = () => {

  const projects = [
    {
      title: "JPetStore",
      description: "I tested the JPetStore online pet store for compatibility across major browsers, smartphones, and tablets. Ensured smooth functionality for all user roles. Created STD, Bugs, and STR files. Used various testing methods and Agile methodology while collaborating and leading a team of two.",
      imgUrl: JPetStore,
      githubRepository: "https://github.com/DanielRazal/JPetStore"
    },
    {
      title: "RDC",
      description: "In this project, I tested two versions (1.0 and 1.1) of the Retail Discount Calculator (RDC) application. The project includes self-made STD + Bugs , STP, and STR files. Several testing methods were employed to fully test the system. The work was conducted using Agile testing methodology in Collaborating and leading with a team of 2.",
      imgUrl: RDC,
      githubRepository: "https://github.com/DanielRazal/Retail-Discount-Calculator"
    },
    {
      title: "ReFormat",
      description: "Lead collection system, this project includes a STD file with written test cases for functional and non-functional tests of the ReFormat application, version 7.9. The work was conducted using Agile testing methodology in Collaborating and leading with a team of 2.",
      imgUrl: ReFormat,
      githubRepository: "https://github.com/DanielRazal/ReFormat"
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div>
                  <h2>Projects</h2>
                  <br /><br />
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    </Nav>
                    <Tab.Pane eventKey="first">
                      <Row className="text-center">
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
