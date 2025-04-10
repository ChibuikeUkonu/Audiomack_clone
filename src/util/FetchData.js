const BASE_URL = 'https://api.spotify.com/v1'    

const options ={
   method: 'GET',
   headers: {
      Authorization: 'Bearer BQDpbV0NVyWrn0lsP_O8RGpV_kEF-49eGHZe7leZGlCe3GVuPBumVZh-QFn8eaDrzi5uLolguPCFxRfXhfWQXEBwbV9xIDEsN7zgN0mBwh1wcQwfi1ZgPLVSm6O7lfuUUUFrYdKrXLU',
}

}
export const SearchMusic = async (param) => {
   const res = await fetch(`${BASE_URL}/search?q=${param}`, options)

   const result = await res.json(); 
   console.log(result) 
   return result;

}