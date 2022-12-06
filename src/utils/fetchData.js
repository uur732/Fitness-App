export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': `${process.env.REACT_APP_API}`,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}

export const youtubeOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
            'X-RapidAPI-Key': `${process.env.REACT_APP_API}` 
        }
      };


export const fetchData = async (url, options) => {
        const response = await fetch(url, options);
        const data = await response.json();

        return data;
    }