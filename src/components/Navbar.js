import React from "react";
import { Navbar, NavDropdown, NavItem, Nav } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import logo from "../res/Logo.png";

const MyNavbar = props => {
    return (
        <div>
            <Navbar fixedTop inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/"><img src={logo} width={30} style={{ margin: "-5px" }} alt="DS" /></a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem
                            active={props.location.pathname === "/"}
                            onClick={e => {
                                e.preventDefault();
                                props.history.push("/")
                            }}>
                            Home
                        </NavItem>
                        <NavItem
                            active={props.location.pathname === "/projects"}
                            onClick={e => {
                                e.preventDefault();
                                props.history.push("/projects")
                            }}>
                            Projects
                        </NavItem>
                        <NavDropdown title="Live Demos" id="dropdown">
                            <NavItem
                                active={props.location.pathname.startsWith("/projects/connect4/demo")}
                                onClick={e => {
                                    e.preventDefault();
                                    props.history.push("/projects/connect4/demo")
                                }}>
                                Min-Max Connect Four
                            </NavItem>
                            <NavItem
                                active={props.location.pathname.startsWith("/projects/mhwcalculator/demo")}
                                onClick={e => {
                                    e.preventDefault();
                                    props.history.push("/projects/mhwcalculator/demo")
                                }}>
                                Monster Hunter World: Calculator
                            </NavItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {props.children}
        </div>
    );
}

export default withRouter(MyNavbar);