import React from "react";
import { useParams } from "react-router-dom";
import SearchList from "./SearchList";
import SearchHeader from "./SearchHeader";
import BottomNav from "../../../components/BottomNav";

const Shop = (props) => {
    
    return(
        <div>
            <SearchHeader/>
            <SearchList />
            <BottomNav/>
        </div>
    )
}

export default Shop