import React, { Component } from 'react';
import axios from "axios"
import Definition from "./Definition"
class Cover extends Component {
    constructor(props) {
        super(props);
        this.state = { word: "", input: "", definition: [] ,test:"flower"}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(evt) {
        this.setState({
            input: evt.target.value
        })

    }
    handleSubmit() {
        this.setState({
            word: this.state.input,
            input:""
        })

      
       
    }
    async callApi(){
        try {
            
            const res = await axios.get(`http://localhost:5000/${this.state.test}`) 
            if(res.status===200){
                this.setState({
                    definition:[...this.state.definition,res.data]
                })
            }
           

           
         } catch (error) {
             console.log(error)
         }
    }
    componentDidMount(){
     this.callApi()
    }
    render() {
        return (<div>
            <h1>Dictionary App</h1>
            <input onChange={this.handleChange} />
            <button onClick={this.handleSubmit}>Search</button>
           
<h2>{this.state.definition}</h2>
         
        </div>);
    }
}

export default Cover;