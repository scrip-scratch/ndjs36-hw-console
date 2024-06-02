#!/usr/bin/env node

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const args = yargs(hideBin(process.argv)).argv;

const isoDate = new Date().toISOString();
console.log(`ISO Date: ${isoDate}`);

if (args.y || args.year) {
  const year = new Date().getFullYear();
  console.log(`Year: ${year}`);
}

if (args.m || args.month) {
  const month = new Date().toLocaleString("default", { month: "long" });
  console.log(`Month: ${month}`);
}

if (args.d || args.date) {
  const date = new Date().getDate();
  console.log(`Date: ${date}`);
}
