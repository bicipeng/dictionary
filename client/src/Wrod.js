import React from 'react';

const Word = ({ definition, searchWord, wordClass }) => {
    return (<React.Fragment>
        {definition && searchWord ? (<div>

            <div><h2>{searchWord}</h2>
                <h3>{wordClass.toString()}</h3>
            </div>
            <ul>
                {
                    definition.map((def, idx) => (<div key={idx}><li > {def}</li></div>))
                }
            </ul>
        </div>) : null}
    </React.Fragment>);
}

export default Word;