import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "..";
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

export const usePostWord = (
  word: string,
  successFunc?: (res: any) => void,
  failFunc?: (err: any) => void
) => {
  return useMutation({
    mutationKey: ["CheckWord"],
    mutationFn: async () => {
      const response = await postCheckWord(word);
      return response;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["GetWord"] });
      successFunc && successFunc(res);
      return;
    },
    onError: (err) => {
      failFunc && failFunc(err);
      return;
    },
  });
};
