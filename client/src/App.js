
import React, { useState, useEffect } from 'react';
import "./App.css"
import Navbar from "./Navbar"

import Word from "./Wrod"
import SearchBar from "./SearchBar"
import Axios from "axios"

import Cover from "./Search"
const App = () => {
  const [loading, setLoading] = useState(false)
  const [defintions, setDefinition] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  // useEffect(() => {
  //   // const fetchData = async () => {
  //   //   const respond = await Axios.get(`http://localhost:5000/`)
  //   //   console.log("here in useeffect", respond)
  //   //   if (respond.status === 200) {
  //   //     setDefinition(respond.data)
  //   //     setLoading(false)
  //   //   }
  //   // }
  //   // fetchData()
  //   console.log("definitions",defintions)
  //   if(defintions.length>=1){
  //     setDefinition([])
  //   }
  // }, [])
  const resetDefintion = () => {
    setDefinition([])
  }
  const search = searchValue => {
    setLoading(true);
    setErrorMessage(null)
    setDefinition([])
    const fetchData = async (input) => {
      const respond = await Axios.get(`http://localhost:5000/${input}`)
      console.log("here is the data", respond.data)

      if (respond.status === 200) {
        console.log("definition,",defintions) 
          setDefinition([respond.data["defined"]])
          setLoading(false)
        

      } else {
        setErrorMessage(respond.error)
        setLoading(false)
      }
    }


    fetchData(searchValue)

  }
  return (<div className="App">
    <Navbar text="HOOKED" />
    <SearchBar search={search} resetDefintion={resetDefintion} />
    <p className="App-intro">Sharing a few of our favourite movies</p>
    <div className="movies">
      {loading && !errorMessage ? (
        <span>loading...</span>
      ) : errorMessage ? (
        <div className="errorMessage">{errorMessage}</div>
      ) : (
            defintions.map((def, idx) => (
              <Word key={idx} definition={def} />
            ))
          )}
    </div>
  </div>);
}



export default App;
