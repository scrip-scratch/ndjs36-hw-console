#!/usr/bin/env node

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const args = yargs(hideBin(process.argv)).argv;

const date = new Date();

if (args.d || args.date) {
  const dateAmountToSub = args.d ? args.d : args.date ? args.date : 0;
  date.setDate(date.getDate() - dateAmountToSub);
}

if (args.m || args.month) {
  const monthAmountToSub = args.m ? args.m : args.month ? args.month : 0;
  date.setMonth(date.getMonth() - monthAmountToSub);
}
