import React from "react";
import Title from "./Title";

class ProjectList extends React.Component {
    render() {
        return (
            <div style={{paddingTop:"12px"}}>
                <Title text="Projects" large/>
            </div>
        );
    }
}

export default ProjectList;