import React from 'react';
const Definition = (props) => {
    console.log("here are",props)
    return (<div>
        {props.word && <React.Fragment><h2>{props.word} :</h2>
            <h3><ul>{props.definition}</ul></h3></React.Fragment>}

    </div>);
}

export default Definition;