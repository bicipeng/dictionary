
import React, { useState } from 'react';
import "./App.css"
import Navbar from "./Navbar"
import Word from "./Wrod"
import SearchBar from "./SearchBar"
import Axios from "axios"

const App = () => {
  const [loading, setLoading] = useState(false)
  const [defintions, setDefinition] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [word, setWord] = useState("")
  const [wordClass, setWordClass] = useState([])

  const resetDefintion = () => {
    setDefinition([])
  }
  const search = searchValue => {
    setLoading(true);

    const fetchData = async (input) => {
      try {
        const respond = await Axios.get(`http://localhost:5000/${input}`)
        console.log("here is the data", respond.data)

        if (respond.status === 200) {
          console.log("definition,", defintions)
          setDefinition([respond.data["defined"]])
          setWordClass([respond.data["wordClass"]])
          setLoading(false)
          setWord(input)

        }
      } catch (error) {
        setErrorMessage("Error Occured...Check your spelling")
        setLoading(false)
      }

    }

    fetchData(searchValue)
 }
 
  return (<div className="App">
    <Navbar text="HOOKED" />
    <SearchBar search={search} resetDefintion={resetDefintion} />
    <div className="movies">
      {loading  ? (
        <span>loading...</span>
      ) : errorMessage ? (<div>{errorMessage}</div>) : (
        defintions.map((def, idx) => (
          <Word key={idx} definition={def} searchWord={word} wordClass={wordClass} />
        ))
      )}
    </div>
  </div>);
}



export default App;
