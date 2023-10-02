// import { Component } from "react";

import { Component } from "react";

// export class Likes extends Component {
//     constructor() {
//         super();
//         this.state = {
//             likes: 0
//         }
//     }

//     updateLikes() {
//         this.setState({
//             likes: this.state.likes +1
//         })
//     }

//     render() {
//         return(
//             <div>
//                 <h1>{this.state.likes}LIKES</h1>
//                 <button onClick={() => this.updateLikes()}>LIKE</button>
//             </div>
//         )
//     }
// }

export class Likes extends Component {
    constructor() {
        super();
        this.state = {
            likes: "Jack"
        }
    }

     updateLikes() {
        this.setState({
            likes: "Leopold"
         })
    }

    render() {
        return(
            <div>
                <h1>Hello {this.state.likes}</h1>
                <button onClick={() => this.updateLikes()}>Click Here!</button>
            </div>
        )
    }
}