import { useMutation, useQuery } from "@tanstack/react-query";
import { getWord, postCheckWord } from "../service/wordleService";

export const useGetWord = () => {
  return useQuery({
    queryKey: ["GetWord"],
    queryFn: async () => {
      const response = await getWord();
      return response;
    },
  });
};

export const usePostWord = (word: string) => {
  return useMutation({
    mutationKey: ["CheckWord"],
    mutationFn: async () => {
      const response = await postCheckWord(word);
      return response;
    },
  });
};
