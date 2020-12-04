import React, { Component } from 'react';
import axios from "axios"
import Definition from "./Definition"
import "./Search.css"
class Cover extends Component {
    constructor(props) {
        super(props);
        this.state = { beforSumit: true, input: "", definition: [] }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(evt) {
        this.setState({
            input: evt.target.value
        })

    }
    // setWord(){
    //     this.setState({
    //         word:this.state.input
    //     })
    // }

    async handleSubmit() {
        try {
            console.log("checking input", this.state.input)
            const res = await axios.get(`http://localhost:5000/${this.state.input}`)
            if (res.status === 200) {
                this.setState({
                    definition: [...this.state.definition, res.data],
                    word: this.state.input,
                    input:""

                })
            }



        } catch (error) {
            console.log(error)
        }
        // this.setState({
        //     word: this.state.input,

        // })



    }
    // async callApi() {
    //     try {

    //         const res = await axios.get(`http://localhost:5000/${this.state.word}`)
    //         if (res.status === 200) {
    //             this.setState({
    //                 definition: [...this.state.definition, res.data]
    //             })
    //         }



    //     } catch (error) {
    //         console.log(error)
    //     }

    // }
    // componentDidMount() {
    //     console.log("definition in component:", this.state.definition)
    //     this.handleSubmit()
    // }
    componenetDidUpdate() {

        if (!this.state.beforSumit) {
            this.setState({
                input: ""
            })
        }

    }

    render() {

        return (<div className="search">

            <input onChange={this.handleChange} placeholder="serach ..." />
            <button onClick={this.handleSubmit}><i class="fas fa-search"></i></button>

            <Definition word={this.state.word} definition={this.state.definition} />

        </div>);
    }
}

export default Cover;