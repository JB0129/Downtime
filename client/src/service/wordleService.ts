import axios from "axios";

// const ROOT_URL = "http://localhost:8080";
const ROOT_URL = "http://34.22.104.147:8080";

export const getWord = async () => {
  const { data } = await axios.get(`${ROOT_URL}/wordle`);
  return data;
};

export const postCheckWord = async (word: string) => {
  const { data } = await axios.post(`${ROOT_URL}/wordle`, { word });
  return data;
};
