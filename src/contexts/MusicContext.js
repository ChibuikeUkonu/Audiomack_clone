"use client"
import { createContext, useState, useContext, useEffect } from "react";



export const SearchContext = createContext(); // initializing a context called
//"                                                          SearchContext"
export const Searchprovider = ({children}) => {
    const [result, setResult] = useState([])

    
    return(
        <SearchContext.Provider value={{result, setResult}}>
            {children}
        </SearchContext.Provider>  
    )
}