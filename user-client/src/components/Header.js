import React, { useContext } from "react";
import { Container, Nav, Navbar, Stack, Image } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import '../css/Header.css';

function Header() {
    let { user, isSignedIn, setIsSignedIn } = useContext(UserContext);

    function handleLogout() {
      localStorage.clear()
      setIsSignedIn("")
    }

    return (
        <div className="flex-wrapper">
        <Navbar bg="black" variant="dark">
          <Container>
            <Nav className="nav-title-and-photo">
                <Image className="nav-photo" src={"images/bird.jpg"} height="40" />
                <Navbar.Text className="ms-3 cool-title">Tweeter</Navbar.Text>
            </Nav>
            <Nav>
              {isSignedIn ? <Link to="/" className="nav-link">Welcome, {user.username}!</Link> :  <Link to="signup" className="nav-link">Sign Up</Link>}
              {isSignedIn ? <Link to="signin" onClick={handleLogout} className="nav-link">Logout</Link> :  <Link to="signin" className="nav-link">Sign In</Link>}
              <Link to="/" className="nav-link">All Tweets</Link>
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