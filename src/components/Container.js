import React from "react";

const Container = props => {
    return (
        <div style={{marginBottom:"10px", padding:"10px", border:"1px black solid", backgroundColor:"#222", boxShadow:"3px 3px 3px rgba(0, 0, 0, 0.2)"}}>
            {
                props.title ? 
                <div style={{textAlign:"center", fontSize:"1.8em", padding:"6px 0px"}}>{props.title}<hr style={{borderColor:"#444", margin:"6px 0px", padding:"0px"}}/></div>:
                null
            }
            {props.children}
        </div>
    );
}

export default Container;