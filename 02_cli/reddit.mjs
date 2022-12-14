#! /usr/bin/env node

// import packages
import open from 'open';
import fetch from 'node-fetch';
import yargs from 'yargs';

// parse env vars
const { argv } = yargs(process.argv);
// console.log(argv);

// init fetch to reddit api
const res = await fetch('https://www.reddit.com/.json');
const data = await res.json();
// console.log(data);
const randomIndex = Math.floor(Math.random() * data.data.children.length);

// get random post from reddit api response of all posts on front page
const post = data.data.children[randomIndex];
// console.log(post);

// log if "--print" flag is passed
if (argv.print) {
  console.log(`
    Title: ${post.data.title}\n
    Link: ${post.data.permalink}
  `);
} else {
  // open in browser if not
  open(`https://www.reddit.com${post.data.permalink}`);
}
