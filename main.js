const engToMorse = document.getElementById("engToMorse");
const morseToEng = document.getElementById("morseToEng");
const inputEnglish = document.getElementById("inputEnglish");
const inputMorse = document.getElementById("inputMorse");

const morseKey = {
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-",
  " ": "/"
};

const letterToMorse = letter => {
  return morseKey[letter];
};

console.log(letterToMorse("@"));

engToMorse.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log(inputEnglish.value);
});

morseToEng.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log(inputMorse.value);
});
