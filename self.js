const Discord = require('discord.js');
const user = new Discord.Client();
const fs = require('fs');
const log = require('./lib/plugins/logging.js')

const config = require("./config/config.json");
const responses = require("./config/responses.json");
user.login("NDIzMjYzMjA0NjA1NTU4Nzg1.DYnydw.J8IWEYJhMfG-tHKiQOvzcyhob-k");

user.on("warn", log.warn);
user.on("error", log.err);

fs.readdir("./lib/events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./lib/events/${file}`);
    let eventName = file.split(".")[0];
    user.on(eventName, (...args) => eventFunction.run(user, ...args));
  });
});

user.on("message", message => {
  if(message.content.indexOf(config.prefix) !== 0) return;
  if(message.author.bot) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(user, message, args, config);
  } catch (err) {
    console.log(err);
  }
});

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
