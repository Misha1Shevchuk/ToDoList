import React from "react";
import Menu from './Menu/Menu';
import Content from "./Tasks/Content";

export default class Wrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProject: null
        }
    }

    render() {
        return (
            <div className="wrapper">
                <Menu />
                <Content />
            </div>
        )
    }
}