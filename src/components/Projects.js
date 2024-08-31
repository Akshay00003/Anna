import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Anna1 from '../assets/images/Anna1.png';
import Anna2 from '../assets/images/Anna2.png';
import Anna3 from '../assets/images/Anna3.png';
import Anna4 from '../assets/images/Anna4.png';
import Anna5 from '../assets/images/Anna5.png';
import Anna6 from '../assets/images/Anna6.png';
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup 1",
      description: "Design & Development",
      imgUrl: Anna1,
    },
    {
      title: "Business Startup 2",
      description: "Design & Development",
      imgUrl: Anna4,
    },
    {
      title: "Business Startup 3",
      description: "Design & Development",
      imgUrl: Anna2,
    },
    {
      title: "Business Startup 4",
      description: "Design & Development",
      imgUrl: Anna5,
    },
    {
      title: "Business Startup 5",
      description: "Design & Development",
      imgUrl: Anna3,
    },
    {
      title: "Business Startup 6",
      description: "Design & Development",
      imgUrl: Anna6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>You are in good hands with our decade of experience. We have been delivering result-oriented solutions to small businesses, global clients, and everything else for years now! Our goal is to provide you with the best results, nearly 10x business that generates better trailing total return across unique mission goals while meeting your unique business needs – all at once & without compromise.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            ))
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Content for the second tab.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>UX/UI based website development services for business organizations looking to increase their market presence online or individuals who have products they want to promote via digital platforms.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background graphic"></img>
    </section>
  )
}