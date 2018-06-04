import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { Grid } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProjectList from "./components/ProjectList";
import NotFound from "./components/NotFound";
import MhwCalculator from "./demos/mhwcalculator/App";

class App extends Component {
    componentWillUpdate() {
        window.scrollTo(0, 0);
    }
    render() {
        var demos = [
            {
                name: "Min-Max Connect Four",
                url: "/projects/connect4/demo"
            },
            {
                name: "Monster Hunter World: Calculator",
                url: "/projects/mhwcalculator/demo"
            }
        ]
        return (
            <Navbar demos={demos}>
                <Grid>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/projects" component={ProjectList}/>
                        <Route path="/projects/mhwcalculator/demo" component={MhwCalculator}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Grid>
            </Navbar>
        );
    }
}

export default App;
