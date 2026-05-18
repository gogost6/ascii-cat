const cats = require("./config/cats");

function cat(mood = "random") {
  if (mood === "random") {
    return randomCat();
  }

  return (
    cats[mood] ||
    "Sorry, I don't know that mood. Here's a random cat instead:\n" +
      randomCat()
  );
}

function randomCat() {
  const moods = Object.keys(cats);
  const randomMood = moods[Math.floor(Math.random() * moods.length)];
  return cats[randomMood];
}

function listMoods() {
  return Object.keys(cats);
}

module.exports = {
  cat,
  randomCat,
  listMoods,
};
