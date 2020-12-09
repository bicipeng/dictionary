import React from 'react';
const Definition = (props) => {
    console.log("here are", props)

    const { definition, word } = props
    const defined = definition[0]
    const wordClass = definition[1]


    return (
        <React.Fragment>
            {/* <h3>{word}</h3> */}
            <h2>{wordClass.toString()}</h2>
            <div>
                {
                    defined.map((def, idx) => (<div><li key={idx}> {def}</li></div>))
                }
            </div>

        </React.Fragment>
    )
}

export default Definition;
