
  import React, { Component } from "react"

class Counter extends React.Component {


    state = {
        num: 0,
    }

    Increase = () => {
        this.setState({
            num: this.state.num + 1,
        })

    }

    Decrease = () => {
        this.setState({
            num: this.state.num - 1,
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.num}</p>
            </div>
        )
    }
}

export default Counter;