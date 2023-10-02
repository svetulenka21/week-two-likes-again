import { Component } from "react";

export class Names extends Component {
    constructor() {
        super();
        this.state = {
            name: "Jack",
            age: 30
        }
    }

    updateName(){
        this.setState({
            name: "Maria",
            age: 40
        })
    }

    render() {
        return(
            <div>
                <h1>Hello {this.state.name}</h1>
                <p>You are {this.state.age} years old</p>
                <button onClick={() => this.updateName()}>Click</button>
            </div>
        )
    }
}