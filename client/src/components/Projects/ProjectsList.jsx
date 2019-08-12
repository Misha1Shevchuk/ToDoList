import React from "react";
import ItemProject from "./ItemProject";

class ProjectsList extends React.Component {

    render = props => {
        return (
            <ul className="menu-list" id="ul-projects-list">
                {/* {props.list.map((num) => (
                   
                <ItemProject key={num.toString()} element={num} />
                ))} */}
                <ItemProject element={this.props.list} />

            </ul>
        );
    }
}


export default ProjectsList;