# ascii-cat 🐱

A tiny npm package that prints ASCII cats with different moods — use it in the terminal or require it in your code.

<p align="center">
  <a href="https://www.npmjs.com/package/ascii-cat">
    <img alt="npm latest version" src="https://img.shields.io/npm/v/ascii-cat/latest.svg">
  </a>
</p>

## Install

```bash
npm install ascii-cat
```

## CLI Usage

```bash
# Random cat
ascii-cat

# Specific mood
ascii-cat happy

# Interactive mood browser
ascii-cat help
```

## Programmatic Usage

```js
const { cat, randomCat, listMoods } = require("ascii-cat");

console.log(cat("happy")); // specific mood
console.log(randomCat()); // random mood
console.log(listMoods()); // list all available moods
```

## Available Moods

`default` · `happy` · `angry` · `hacker` · `cute` · `rich` · `party` · `ninja` · `pirate` · `wizard` · `sleepy` · `surprised` · `cool` · `sad` · `confused`

## Example

```
 /\_/\
( ^.^ )
 > ^ <
```

## License

MIT
