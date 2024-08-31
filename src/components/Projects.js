import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import anj1 from '../assets/Anj/anj1.jpg'
import anj2 from '../assets/Anj/anj2.jpg'
import anj3 from '../assets/Anj/anj3.jpg'
import anj4 from '../assets/Anj/anj4.jpg'
import anj5 from '../assets/Anj/anj5.jpg'
import anj6 from '../assets/Anj/anj6.jpg'
import Anna1 from '../assets/images/Anna1.png'
import Anna2 from '../assets/images/Anna2.png'
import Anna3 from '../assets/images/Anna3.png'
import Anna4 from '../assets/images/Anna4.png'
import Anna5 from '../assets/images/Anna5.png'
import Anna6 from '../assets/images/Anna6.png'
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: Anna1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: Anna4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: Anna2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: Anna5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: Anna3,
    },
    {
      title: "Business Startup",
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
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>You are in good hands with our decade of experience. We have been delivering result-oriented solutions to small businesses, global clients and everything else for years now! Our goal is to provide you best ever results nearly 10x business that generates better trailing total return across unique mission goals while meeting your unique business needs – all at once & without compromise</p>
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
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>UX/UI based website development services for business organizations looking to increase their market presence online or individuals who have products they want promote via digital platforms.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
