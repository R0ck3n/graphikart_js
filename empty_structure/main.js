const string = "Lorem ipsum dolor sit amet.";
let arrayString = string.toLowerCase().split("");
const filters = ["l", " ", "."];

filters.forEach((exclude) => {
  arrayString = arrayString.filter((el) => {
    return el !== exclude;
  });
});

console.log(arrayString);
