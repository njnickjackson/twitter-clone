import React from "react";
import { Container, Nav, Navbar, Stack, Image } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import '../css/Header.css';

function Header() {

    return (
        <div className="flex-wrapper">
        <Navbar bg="black" variant="dark">
          <Container>
            <Nav className="nav-title-and-photo">
                <Image className="nav-photo" src={"images/bird.jpg"} height="40" />
                <Navbar.Text className="ms-3 cool-title">Tweeter</Navbar.Text>
            </Nav>
            <Nav>
              <Link to="signup" className="nav-link">Sign Up</Link>
              <Link to="signin" className="nav-link">Sign In</Link>
              <Link to="tweets" className="nav-link">All Tweets</Link>
            </Nav>
          </Container>
        </Navbar>
        <Stack gap={3} className="col-md-10 mx-auto mt-3">
          <Outlet />
        </Stack>
      </div>
    )
}

export default Header