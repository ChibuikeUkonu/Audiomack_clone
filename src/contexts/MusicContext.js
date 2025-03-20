"use client"
import { createContext, useState, useContext, useEffect } from "react";



export const MusicContext = createContext(); // initializing a context called
//"                                                          SearchContext"
export const Searchprovider = ({children}) => {
    const [result, setResult] = useState([])

    
    return(
        <MusicContext.Provider value={{result, setResult}}>
            {children}
            </MusicContext.Provider>
    )
}