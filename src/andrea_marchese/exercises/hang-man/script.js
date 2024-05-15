/** @format */

const keyword = 'topsecret';
let attempts = 2;
const characters = [];

function init(key) {
  if (attempts === 0) console.log('Game Over!');
  else {
    if (keyword.includes(key)) characters.push(key);
    else attempts--;

    let word = '';
    for (let i = 0; i < keyword.length; i++) {
      if (characters.includes(keyword[i])) word = `${word}${keyword[i]}`;
      else word = `${word}*`;
    }
    console.log(word);
  }
}

init('t');
