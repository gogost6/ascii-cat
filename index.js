const cats = require("./config/cats");

function cat(mood = "random") {
  if (mood === "random") {
    return randomCat();
  }

  if (mood === "help") {
    return "Available moods: " + Object.keys(cats).join(", ");
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

module.exports = {
  cat,
  randomCat,
};
