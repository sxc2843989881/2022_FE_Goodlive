import React from "react";
import { useParams } from "react-router-dom";
import SearchList from "./SearchList";
import SearchHeader from "./SearchHeader";

const Search = (props) => {
    
    return(
        <div>
            <SearchHeader/>
            <SearchList />
            
        </div>
    )
}

export default Search