import React from "react";
import { Navbar, NavDropdown, NavItem, Nav } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import header from "../res/header.png";

class MyNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollY: 0,
        }
        this.handleScroll = this.handleScroll.bind(this);
    }
    handleScroll() {
        this.setState({
            scrollY: window.pageYOffset
        });
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    render() {
        let demos = this.props.demos.map((demo, index) => {
            return (
                <NavItem
                    key={index}
                    active={this.props.location.pathname.startsWith(demo.url)}
                    onClick={e => {
                        e.preventDefault();
                        this.props.history.push(demo.url)
                    }}>
                    {demo.name}
                </NavItem>
            );
        });
        return (
            <div>
                <div style={{ height: "130px", paddingBottom: "6px", backgroundColor: "#333", display: "flex", justifyContent: "center", alignItems: "flex-end" }}>
                    <img
                        onClick={() => this.props.history.push("/")}
                        style={{ maxWidth: "500px", width: "100%", cursor: "pointer" }} alt="Daryan's Spot" src={header} />
                </div>
                <Navbar style={{ borderRadius: "0px", marginBottom: "0px" }} fixedTop={this.state.scrollY > 130} inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse style={{ paddingLeft: "0px" }}>
                        <Nav>
                            <NavItem
                                active={this.props.location.pathname === "/"}
                                onClick={e => {
                                    e.preventDefault();
                                    this.props.history.push("/")
                                }}>
                                <span style={{ paddingLeft: "10px", paddingRight: "10px" }}>Home</span>
                            </NavItem>
                            <NavItem
                                active={this.props.location.pathname === "/projects"}
                                onClick={e => {
                                    e.preventDefault();
                                    this.props.history.push("/projects")
                                }}>
                                <span style={{ paddingLeft: "10px", paddingRight: "10px" }}>Projects</span>
                            </NavItem>
                            <NavDropdown title={<span style={{ paddingLeft: "10px" }}>Live Demos</span>} id="dropdown">
                                {demos}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div style={{ paddingTop: this.state.scrollY > 130 ? "60px" : "10px", paddingBottom:"10px" }}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default withRouter(MyNavbar);