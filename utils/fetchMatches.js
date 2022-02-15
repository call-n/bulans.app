import { baseUrlEu, baseUrlEun1, api_key, fetchApi  } from './fetchApi';

export async function matches(puuid) {
    
    const data = await fetchApi(`${baseUrlEu}lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=10&api_key=${api_key}`);

    return data;
}

export async function matchInfo(id) {
    const data = await fetchApi(`${baseUrlEu}lol/match/v5/matches/${id}?api_key=${api_key}`);

    return data;
}
