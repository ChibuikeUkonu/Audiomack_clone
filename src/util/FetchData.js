const BASE_URL = 'https://api.audiomack.com/v1'    



export const SearchMusic = async (param) => {
   const res = await fetch(`${BASE_URL}/search?q=${param}`)

   const result = await res.json(); 
   console.log(result) 
   return result;

}