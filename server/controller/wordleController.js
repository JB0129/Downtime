const isDictionaryWord = require("check-dictionary-word");
const words = require("./../repository/wordleList");

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
      const distinction = isDictionaryWord(word);
      return res.status(201).json(distinction);
    }
  },
};
