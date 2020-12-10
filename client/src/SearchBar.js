import React, { useState } from 'react';
import "./Search.css"
const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState("")
    const handleSearchInputChanges = e => {
        setSearchValue(e.target.value)
    }
    const resetInputField = () => {
        setSearchValue("")
    }

    const callSearchFunction = (e) => {
        e.preventDefault()
        props.search(searchValue)
        resetInputField()
    }
    return (<form className="search">
        <input value={searchValue} onChange={handleSearchInputChanges} type="text" placeholder="Search..." />
        <button className="button" onClick={callSearchFunction} type="submit" value="Search" ><i className="fas fa-search"></i></button>


    </form>);
}

export default SearchBar;