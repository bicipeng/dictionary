import React, { Component } from 'react';
import axios from "axios"
class details extends Component {
    constructor(props) {
        super(props);
        this.state = { definition: [] }
    }
    async componentDidMount() {
        try {
            const respond = await axios.get(`http://localhost:5000/${this.props.word}`)
            console.log("here in componentDimount", respond)
            if (respond.status === 200) {
                this.setState({ definition: [...this.state.definition, respond.data] })
            }
        } catch (error) {
            console.log(error)
        }
    }
    render() {
console.log("props.word",this.props.word)
        return (<React.Fragment>
            {this.state.definition.length!==0 ? (<div>
                <h2>{this.props.word}:</h2>
            {/* <h3>{this.state.definition[1].toString()}</h3> */}
            <ul>
            {
                    this.state.definition.map((def, idx) => (<div><li key={idx}> {def}</li></div>))
                }
            </ul>
            </div>) : null}
        </React.Fragment>);
    }
}

export default details;