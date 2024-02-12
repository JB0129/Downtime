import axios from "axios";

const ROOT_URL = "http://localhost:8080";

export const getWord = async () => {
  const { data } = await axios.get(ROOT_URL);
  return data;
};

export const postCheckWord = async (word: string) => {
  const { data } = await axios.post(ROOT_URL, word);
  return data;
};
