export const formatUncomfortableToText = (array: string[]) => {
  const dicionario: { [key: string]: string } = {
    rugas: "as rugas",
    manchas: "as manchas",
    acnes: "as acnes",
    flacidez: "a flacidez",
    "pé de galiha": "o pé de galinha",
    "bigode chinês": "o bigode chinês",
    cicatrizes: "as cicatrizes",
    estrias: "as estrias",
  };

  let str = "";
  let arrayLength = array.length;

  array.forEach((word, i) => {
    word = word.toLocaleLowerCase();

    if (dicionario[word]) {
      str += dicionario[word];

      if (i === arrayLength - 2) {
        str += " e ";
      } else if (i < arrayLength - 1) {
        str += ", ";
      }
    }
  });

  return str;
};
