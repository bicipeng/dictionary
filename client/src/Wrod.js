import React from 'react';

const Word = ({ definition, word }) => {
    return (<React.Fragment>
        {definition ? (<div><h2>definition:</h2>
            <ul>
                {
                    definition.map((def, idx) => (<div key={idx}><li > {def}</li></div>))
                }
            </ul>
        </div>) : null}
    </React.Fragment>);
}

export default Word;