const axios = require("axios");
const words = require("./../repository/wordleList");

const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  findWord: (req, res) => {
    const today = new Date();
    const date = today.getDate();
    const todatWord = words.find((el, idx) => idx + 1 === date && el);
    if (todatWord) {
      return res.status(200).json(todatWord);
    } else {
      res.status(404).json("Not Found");
    }
  },
  checkWord: (req, res) => {
    if (req.body) {
      const { word } = req.body;

      // 단어 검사하는 API
      const clientId = process.env.NAVER_CLIENT_ID;
      const clientSecret = process.env.NAVER_CLIENT_SECRET;
      const url = "https://openapi.naver.com/v1/papago/n2mt";
      const papago = () => {
        return axios
          .post(
            url,
            { text: word, source: "en", target: "ko" },
            {
              headers: {
                "X-Naver-Client-Id": clientId,
                "X-Naver-Client-Secret": clientSecret,
              },
            }
          )
          .then((response) => {
            return res.status(201).json(response.data);
          })
          .catch((err) => {
            return res.status(404).json(err.response.data);
          });
      };
      papago();
    }
  },
};
