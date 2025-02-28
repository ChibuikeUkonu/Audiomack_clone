const BASE_URL = 'audiomack-scraper.p.rapidapi.com'

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '4f268bd98amshc1d54ab400bd033p12ecd1jsn08e1073e92cf',
		'x-rapidapi-host': 'audiomack-scraper.p.rapidapi.com'
	}
}

export const SearchMusics = async (param) => {
    const res = await fetch(`${BASE_URL}/${param}`,options)

    const result = await res.json();  
    return result;

}
//Let's implement the trending now" endpoint

export const trendingMusic = async () =>{
    const res = await fetch (`${BASE_URL}/trending/?lang=en&country=us&section=Now`,options)

const result = await res.json();
return result;
}

export const getSubtitle = async (music_id) => {
    const res = await fetch(`${BASE_URL}/musics/subtitles?music_id=${music_id}`,options)
    const result = await res.json();
    return result;
}
