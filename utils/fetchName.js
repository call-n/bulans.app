import { baseUrlEu, baseUrlEun1, api_key, fetchApi  } from './fetchApi';

export async function names(name) {
    const theName = encodeURIComponent(name);
  
    const data = await fetchApi(`${baseUrlEun1}lol/summoner/v4/summoners/by-name/${theName}?api_key=${api_key}`);

    return data;
}

export async function nameByPuuid(puuid) {
  
    const data = await fetchApi(`${baseUrlEu}riot/account/v1/accounts/by-puuid/${puuid}?api_key=${api_key}`);

    return data;
}

export async function rankedById(id) {
  
    const data = await fetchApi(`${baseUrlEun1}lol/league/v4/entries/by-summoner/${id}?api_key=${api_key}`);

    return data;
}
