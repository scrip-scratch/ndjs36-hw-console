#!/usr/bin/env node

const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });
let number;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
  number = getRandomNumber(0, 100);
  //   console.log(number); // подсказка

  rl.question("Начнем игру! Угадай число от 0 до 100. ", (answer) => {
    checkAnswer(answer);
  });
}

function askQuestion() {
  rl.question("Попробуй еще раз. Если надоело, введи 'стоп'. ", (answer) => {
    checkAnswer(answer);
  });
}

function checkRestart() {
  rl.question("Сыграем еще? (да/нет) ", (answer) => {
    switch (answer) {
      case "да":
        startGame();
        break;
      case "нет":
        console.log("До свидания!", "\n");
        rl.close();
        break;
      default:
        console.log("Некоректный ввод");
        checkRestart();
        break;
    }
  });
}

function checkAnswer(answer) {
  if (answer === "стоп") {
    console.log("До свидания!", "\n");
    rl.close();
    return;
  }
  if (!Number.isInteger(Number(answer))) {
    console.log("Некоректный ввод");
    askQuestion();
    return;
  }
  if (Number(answer) > number) {
    console.log("Меньше");
    askQuestion();
    return;
  }
  if (Number(answer) < number) {
    console.log("Больше");
    askQuestion();
    return;
  }
  if (Number(answer) === number) {
    console.log("Угадал!");
    checkRestart();
    return;
  }
}

startGame();
