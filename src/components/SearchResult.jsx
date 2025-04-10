import React, {useContext} from 'react'
import { SearchContext, Searchprovider,  } from '@/contexts/MusicContext'
import style from './SearchResult.module.css';


const SearchResult = () => {
  
   const {result, setResult} = useContext(SearchContext )
   console.log(result)

  return (
    <Searchprovider>

    <div className={style.result}>
      {
        result.map((results, index) => (
          <div className={style.main_container}>
          <div className={style.general}>
          <img src={results.artists.items[1].images[0].url} alt="" />
          <div className={style.heisrema}>
          <h1>{results.artists.items[1].name}</h1>
          <button>follow</button>
          </div>
          </div>
          <div className={style.album}>
          <img src={results.albums.items[7].images[0].url} alt="" />
          <div className={style.content}>
          <a>{results.albums.items[7].artists.map((names) => (
            <p>{names.name}</p>
          ))}</a>
          <h1>Album:<span style={{color:"#ffa500"}}>{results.albums.items[7].name}</span></h1>
          <h3>Release Date:{results.albums.items[7].release_date}</h3>
         </div>
          </div>
          </div>
        ))
      
      }
      
      
    </div>
    </Searchprovider>
  )
}

export default SearchResult
