import { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            minValue: -Infinity,
            maxValue: Infinity,
        };
        this.step = 1;
    }

    decreaseCount = () => {
        if (
            this.state.count > this.state.minValue &&
            this.state.count + this.step <= 50
        ) {
            this.setState({
                count: this.state.count - this.step,
            });
        }
    };

    increaseCount = () => {
        if (
            this.state.count < this.state.maxValue &&
            this.state.count - this.step >= -50
        ) {
            this.setState({
                count: this.state.count + this.step,
            });
        }
    };

    reset = () => {
        this.setState({
            count: 0,
        });
    };

    handleStep = (e) => {
        if (e.target.value) {
            this.step = +e.target.value;
        } else {
            this.step = 1;
        }
    };

    render() {
        const { count } = this.state;
        return (
            <div>
                <h1 className={"title"}>Counter</h1>
                <div className={"container"}>
                    <button
                        disabled={this.state.count == this.state.minValue}
                        onClick={this.decreaseCount}
                    >
                        -
                    </button>
                    <h1 className={"counter"}>{count} </h1>
                    <button
                        onClick={this.increaseCount}
                        disabled={this.state.count == this.state.maxValue}
                    >
                        +
                    </button>
                    <button className="min">
                        min{" "}
                        <input
                            type="text"
                            onChange={(e) => this.setState({ minValue: e.target.value })}
                        />
                    </button>
                    <button className="max">
                        max{" "}
                        <input
                            type="text"
                            onChange={(e) => this.setState({ maxValue: e.target.value })}
                        />
                    </button>
                    <button className="step">
                        step <input type="text" onChange={this.handleStep} />
                    </button>
                </div>
                <button className="resetBtn" onClick={this.reset}>
                    Reset
                </button>
            </div>
        );
    }
}

export default Counter;