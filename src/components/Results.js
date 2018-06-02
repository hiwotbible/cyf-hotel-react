import React from "react";
import moment from "moment";
const Row = props => {
    return (
        <tr>
            <td>{props.result.title}</td>
            <td>jame</td>
            <td>mate</td>
            
            
        </tr>
    )
}

class Results extends React.Component {
    render() {
        console.log([0])
        console.log(this.props.results[0])
        return (
            <table>
                <thead>
                    <tr>
                        <th>title</th>
                        <th>first Name</th>
                        <th>surname</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.results.map((result)=>(
                        <Row result={result}/>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default Results
