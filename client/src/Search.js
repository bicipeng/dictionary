import React, { Component } from 'react';
import axios from "axios"
import Definition from "./Definition"
import "./Search.css"
import Details from "./Details"
const defs = [
    [
        'a principal taxonomic grouping that ranks above order and below phylum or division, such as Mammalia or Insecta.',
        'a division of candidates according to merit in a university examination',
        'a set or category of things having some property or attribute in common and differentiated from others by kind, type, or quality',
        'a social division based on social or economic status',
        'the rich or educated.',
        'impressive stylishness in appearance or behaviour',
        'a system of ordering society whereby people are divided into sets based on perceived social or economic status',
        'an occasion when pupils meet with their teacher for instruction; a lesson',
        'a course of instruction',
        'all of the college or school students of a particular year',
        'a group of students or pupils who are taught together',
        'assign or regard as belonging to a particular category',
        'showing stylish excellence'
    ],
    ['noun', 'verb', 'adjective']
]
class Cover extends Component {
    constructor(props) {
        super(props);
        this.state = { input: "", definition: [] ,word:""}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt) {
        this.setState({
            input: evt.target.value,
          
        })

    }
    handleSubmit(evt){
     evt.preventDefault()
     this.setState({
         word:this.state.input
     })
    }

    // async handleSubmit() {
    //     try {

    //         const res = await axios.get(`http://localhost:5000/${this.state.input}`)
    //         if (res.status === 200) {

    //             this.setState({
    //                 definition: [...this.state.definition,res.data],
                  
    //                 input: ""

    //             })
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }

       
    // }
    
    // componentDidMount(){
    //    this.setState({
    //        definition:[]
    //    })
    // }
  

    render() {

        // const definition = this.state.definition[0]
        // const word = this.state.input
        // console.log("this.state.definition", this.state.definition)

        return (
        <div className="search">

            <input onChange={this.handleChange} placeholder="serach ..." value={this.state.input} />
            <button onClick={this.handleSubmit}><i className="fas fa-search"></i></button>
            {/* cd */}
            {/* {definition && <Definition definition={definition} word={word} />} */}
            <Details word={this.state.word}/>
        </div>
    
        );
    }
}

export default Cover;