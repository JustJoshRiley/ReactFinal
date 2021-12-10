import React from "react";
import './Like.css';

class Like extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    

    increaseLike() {
        this.setState(function(state) {
            return {
                count: state.count + 1
            }
        })
    }

    decreaseLike() {
        this.setState(function(state) {
            return {
                count: state.count - 1
            }
        })
    }

    render() {
        return (
            <div className="isSplit">
                <button onClick={this.increaseLike.bind(this)}>Like</button>
                <h2>{this.state.count}</h2>
                <button onClick={this.decreaseLike.bind(this)}>Dislike</button>
            </div>
        )
    }
}

export default Like;