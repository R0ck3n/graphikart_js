const phrase = "Vous etes vous trompé ?";
const frequencies = {};
const words = phrase.split(" ").map((el) => el.toLowerCase());

for (let word of words) {
  if (frequencies[word]) frequencies[word]++;
  else frequencies[word] = 1;
}

console.log(frequencies);
