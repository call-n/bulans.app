import axios from 'axios';

export const api_key = 'RGAPI-38262c70-cf2f-45b8-8898-b9986c128dbc';
export const baseUrlEun1 = 'https://eun1.api.riotgames.com/';
export const baseUrlEu = 'https://europe.api.riotgames.com/';

export const fetchApi = async (url) => {
    const { data } = await axios.get(url);
    return data;
}