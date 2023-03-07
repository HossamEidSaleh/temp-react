import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/images/project-img1.png";
import projImg2 from "../assets/images/project-img2.png";
import projImg3 from "../assets/images/project-img3.png";
import colorSharp2 from "../assets/images/color-sharp2.png";



export const Projects = () => {
     
    const projects = [

        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ];
    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                       <h2>My Projects</h2>
                       <p>My name is Hossam , i live in benisuef , this is the 11th proj in react Dev.</p>
                       <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">1st Section</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">2nd Section</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">3rd Section </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project , index) =>{
                                            return(
                                                <ProjectCard key={index} {...project}/>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second"></Tab.Pane>
                            <Tab.Pane eventKey="third">My name is Hossam , i live in benisuef , this is the 11th proj in react Dev.</Tab.Pane>
                        </Tab.Content>
                       </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>

        </section>

     )
}