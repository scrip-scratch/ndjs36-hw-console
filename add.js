#!/usr/bin/env node

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const args = yargs(hideBin(process.argv)).argv;

const date = new Date();

if (args.d || args.date) {
  const dateAmountToAdd = args.d ? args.d : args.date ? args.date : 0;
  date.setDate(date.getDate() + dateAmountToAdd);
}

if (args.m || args.month) {
  const monthAmountToAdd = args.m ? args.m : args.month ? args.month : 0;
  date.setMonth(date.getMonth() + monthAmountToAdd);
}

console.log(`ISO Date: ${date.toISOString()}`);
