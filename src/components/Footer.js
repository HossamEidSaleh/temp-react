import { Col, Container, Row } from "react-bootstrap"
import logo from "../assets/images/logo.svg"
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.svg";
import navIcon3 from "../assets/images/nav-icon3.svg";


export const  Footer =()=>{
    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={logo} alt="logo"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                        <a href=""><img src={navIcon1} alt="pic1"/></a>
                        <a href=""><img src={navIcon2} alt="pic2"/></a>
                        <a href=""><img src={navIcon3} alt="pic3"/></a>
                        </div>
                        <p>CopyRight 2023. All Right Reserved here By Hossam Eid </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}