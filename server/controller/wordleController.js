const words = require("./../repository/wordleList.ts");

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
    // if (req.body) {
    //   return res.status(201);
    // }
    
    // 단어 검사하는 API
    // const clientId = process.env.CLIENT_ID;
    // const clientSecret = process.env.CLIENT_SECRET;
    // const url = "https://openapi.naver.com/v1/papago/detectLangs";
    // const papago = () => {
    //   return axios
    //     .post(url, "happy", {
    //       headers: {
    //         "X-Naver-Client-Id": clientId,
    //         "X-Naver-Client-Secret": clientSecret,
    //       },
    //     })
    //     .then((res) => console.log(res))
    //     .catch((err) => console.log(err));
    // };
  },
};
