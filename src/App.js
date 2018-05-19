import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { Grid } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProjectList from "./components/ProjectList";
import NotFound from "./components/NotFound";

class App extends Component {
    render() {
        return (
            <Navbar>
                <Grid>
                    <div style={{marginTop:"51px"}}>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/projects" component={ProjectList}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </Grid>
            </Navbar>
        );
    }
}

export default App;
