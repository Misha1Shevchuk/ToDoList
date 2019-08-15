import React from "react";
import axios from 'axios';

export default class ChangeProject extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
        }
    }

   changeProject = (event) => {
        event.preventDefault();
        console.warn('Видалити проект: ' + this.props.element.project);
        axios.post(`http://localhost:3001/change-project`, {id_project: this.props.element.id_project, newNameProject: element.nameProject});
        this.props.getList();
    }

    render = () => {
        return (
            <form action="">
                <input type="text"/>
                <input type="submit"/>
                <input type="reset" />
            </form>
        );
    }
}