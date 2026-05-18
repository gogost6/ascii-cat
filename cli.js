#!/usr/bin/env node

const readline = require("readline");
const { cat, listMoods } = require("./index");

const mood = process.argv[2];

if (mood && mood !== "help") {
  console.log(cat(mood));
  process.exit(0);
}

if (mood === "help") {
  startInteractiveHelp();
} else {
  console.log(cat());
}

function startInteractiveHelp() {
  const moods = listMoods();

  console.log("\n🐱 ASCII Cat Help");
  console.log("----------------");
  console.log("Available moods:\n");

  moods.forEach((mood, index) => {
    console.log(`${index + 1}. ${mood}`);
  });

  console.log("\nType a mood name or number to preview it.");
  console.log("Type 'random' for a random cat.");
  console.log("Type 'exit' or press Ctrl+C to quit.\n");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.setPrompt("ascii-cat> ");
  rl.prompt();

  rl.on("line", (input) => {
    const value = input.trim();

    if (value === "exit" || value === "quit") {
      rl.close();
      return;
    }

    if (value === "random") {
      console.log(cat("random"));
      rl.prompt();
      return;
    }

    const selectedIndex = Number(value) - 1;

    if (!Number.isNaN(selectedIndex) && moods[selectedIndex]) {
      console.log(cat(moods[selectedIndex]));
      rl.prompt();
      return;
    }

    if (moods.includes(value)) {
      console.log(cat(value));
    } else {
      console.log(`Unknown mood: ${value}`);
    }

    rl.prompt();
  });

  rl.on("close", () => {
    console.log("\nBye 🐾");
    process.exit(0);
  });
}
