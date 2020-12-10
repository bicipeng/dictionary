import React from 'react';
import "./Word.css"

const Word = ({ definition, searchWord, wordClass }) => {
    return (<React.Fragment>
        {definition && searchWord ? (<div className="word">
            <div ><h2>{searchWord}</h2>
                <h3>{wordClass.join(", ")}</h3>
            </div>
            <div className="defined">
                <ul>
                    {
                        definition.map((def, idx) => (<React.Fragment><li key={idx} > {def}</li><br /></React.Fragment>))
                    }
                </ul></div>
        </div>) : null}
    </React.Fragment>);
}

export default Word;