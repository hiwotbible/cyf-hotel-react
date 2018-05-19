import React from "react";
class newBookingMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    increasenewBookingMessage = () => {
        this.setStates({ count: this.state.count + 1 });
    };
    render() {
        return (
            <div>
                <button onClick={this.increasenewBookingMessage}>
                    {this.props.buttonName}
                </button>
                <p>Already {this.state.count} bookied out of a 100%</p>

            </div>

        );
    }
}
