import React, { useContext, useState } from 'react'
import { SearchContext } from '@/contexts/MusicContext';
import { SearchMusic } from '@/util/FetchData'
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
const {result, setResult} = useContext(SearchContext )
const [loading, setLoading] = useState(false)
const [searchQuery, setSearchQuery] = useState("")
// const [result, setResult] = useState([])

const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true)

    const data = await SearchMusic(`q=${searchQuery}&type=artist,album,playlist`)
      setResult([data])
      console.log(data)
      setLoading(false)
     
    }
    
    
  return (

    <div>
        <form onSubmit={handleSearch}>
          <CiSearch />
      <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search for artists,Songs,albums!"
      style={{
        padding: '5px',
        border:'none',
        flex:1,
        borderRadius:'20px',
        width:'210px',
        color:'white',
        alignItems:'center',
        backgroundColor:'transparent',

      }}/>
        </form>
    </div>
  )
}

export default SearchBar
