import { useMutation, useQuery } from "@tanstack/react-query";
import { getWord, postCheckWord } from "../service/wordleService";
import { queryClient } from "..";

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
  failFunc?: () => void
) => {
  return useMutation({
    mutationKey: ["CheckWord"],
    mutationFn: async () => {
      const response = await postCheckWord(word);
      return response.translatedText;
    },
    onSuccess: (res) => {
      //console.log(res);
      queryClient.invalidateQueries({ queryKey: ["GetWord"] });
      successFunc && successFunc(res);

      return;
    },
    onError: (err) => {
      console.log(err);
      failFunc && failFunc();
      return;
    },
  });
};
