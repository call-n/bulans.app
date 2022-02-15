import axios from 'axios';

export const api_key = process.env.API_KEY;
export const baseUrlEun1 = 'https://eun1.api.riotgames.com/';
export const baseUrlEu = 'https://europe.api.riotgames.com/';

export const fetchApi = async (url) => {
    const { data } = await axios.get(url);
    return data;
}
