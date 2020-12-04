import React from 'react';
const Definition = (props) => {
    console.log("here are", props)
    // const defined = props.definition.map((ele,idx)=>(<li key={idx}>{ele}</li>))
    
    return (<div>
        {props.word && <React.Fragment><h2>{props.word} :</h2>
        <h2>{props.definition}</h2>
        <h2>{typeof props.definition}</h2>
        </React.Fragment>}

    </div>);
}

export default Definition;
