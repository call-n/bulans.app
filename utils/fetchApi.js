import axios from 'axios';

export const api_key = process.env.API_KEY;
export const baseUrlEun1 = 'https://eun1.api.riotgames.com/';
export const baseUrlEuw1 = 'https://euw1.api.riotgames.com/';
export const baseUrlNa1 = 'https://na1.api.riotgames.com/';
export const baseUrlOc1 = 'https://oc1.api.riotgames.com/';
export const baseUrlEu = 'https://europe.api.riotgames.com/';

export const fetchApi = async (url) => {

  try {
        const { data } = await axios.get(url);
    
        return data;
      } catch (error) {
        console.log(error.response);
        
        return {error: 'Player not found'};
      }
    
}
