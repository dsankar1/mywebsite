import React from "react";

const ProjectListItem = props => {
    return (
        <div className="project-list-item">
            <img src={props.image} alt={props.title} style={{width:"60px", height:"60px"}}/>
            <div style={{padding:"0 10px"}}>
                <b>{props.title}</b>
                <div style={{color:"gray"}}>{props.summary}</div>
            </div>
        </div>
    );
}

export default ProjectListItem;