import React from "react";
class Test extends React.Component {
    constructor() {
        super();
        this.state = {
            message: "1123"
        };
        this.getObjetProject = this.getObjetProject.bind(this);
    }

    // updateMessage() {
    //     this.setState({
    //         message: "my friend Misha!"
    //     });

    // }

    getObjetProject = async () => {
                // let request = new XMLHttpRequest();
        // request.open('GET', "/projectsList");
        // request.responseType = 'json';
        // request.send();
        // request.onreadystatechange = function () {
        //     json = request.response;
        // }
        const api_url = await fetch(`https://localhost:3001/projectsList`, {method: 'POST'});
        const json = await api_url.json();

        this.setState({
            message: "It is data!"
        });


    }

        render() {
            return (
                <div>
                    <h1>Hello {this.state.message}!</h1>
                    <button className="red-button-accept" onClick={this.getObjetProject}>Click me!</button>
                </div>
            );
        }
    }

    export default Test;