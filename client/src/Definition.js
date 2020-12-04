import React from 'react';
const Definition = (props) => {
    console.log("here are", props)

    const { definition, word } = props
    // const defined = definition[0]
    // const wordClass = definition[1]
    console.log("isaRRAY", Array.isArray(definition))

    return (
        <React.Fragment>
            <h3>{word}</h3>
            {/* {wordClass.map((a, idx) => (<li key={idx}>{a}</li>))} */}
            <div>
                {Array.isArray(definition)}
            </div>

        </React.Fragment>
    )
}

export default Definition;
