import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() }
    }
    componentDidMount() {
        // when this component rendered
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        // when this component removed
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}


ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);