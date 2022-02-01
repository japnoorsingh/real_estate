import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'bc001ac1b3msh2d54a43bceed845p1c14f8jsna5df01a6c33d'
    },
  });
    
  return data;
}