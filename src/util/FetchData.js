const BASE_URL = 'https://api.spotify.com/v1'    

const options ={
   method: 'GET',
   headers: {
      Authorization: 'Bearer BQBZJkaADcjogoYuLX_9neOtlw-jHR2BhV5Q2syNmdmSQwW95IzA1ysRPROlZWS7yzzpg5dXG7PonVbFNre-cNAWg9lD3pHE5espY4WhLltLQuTKAhXfgXZK63O7ZX0tHT-yrgriflI',
}

}
export const SearchMusic = async (param) => {
   const res = await fetch(`${BASE_URL}/search?q=${param}`, options)

   const result = await res.json(); 
   console.log(result) 
   return result;

}