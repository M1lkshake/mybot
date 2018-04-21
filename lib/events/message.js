exports.run = (client, message) => {
  const Discord = require("discord.js");
  const logger = require("../plugins/logging.js");
  const fs = require("fs");
  const sql = require("sqlite");
  sql.open("./score.sqlite");

  let responses = JSON.parse(fs.readFileSync("./config/responses.json", "utf8"));
  if(responses[message.content.toLowerCase()]) {
    message.channel.send(responses[message.content.toLowerCase]);
  }
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  
  if(message.content.toLowerCase().indexOf("ur mom gay") != -1) message.channel.sendMessage("no u");
  if(message.content.toLowerCase().indexOf("your mom gay") != -1) message.channel.sendMessage("no u");
  if(message.content.toLowerCase().indexOf("youre mom gay") != -1) message.channel.sendMessage("no u");
  if(message.content.toLowerCase().indexOf("youre dad lesbian") != -1) message.channel.sendMessage("no u");
  if(message.content.toLowerCase().indexOf("your dad lesbian") != -1) message.channel.sendMessage("no u");
  if(message.content.toLowerCase().indexOf("ur dad lesbian") != -1) message.channel.sendMessage("no u");
  if(message.content.toLowerCase().indexOf("youre granny tranny") != -1) message.channel.sendMessage("no u");
  if(message.content.toLowerCase().indexOf("your granny tranny") != -1) message.channel.sendMessage("no u");
  if(message.content.toLowerCase().indexOf("ur granny tranny") != -1) message.channel.sendMessage("no u");
  if(message.content.toLowerCase().indexOf("ya daddy lesbian") != -1) message.channel.sendMessage("no u");
  if(message.content.toLowerCase().indexOf("your grandpap a trap") != -1) message.channel.sendMessage("no u");
  if(message.content.toLowerCase().indexOf("ur grandpap a trap") != -1) message.channel.sendMessage("no u");
  if(message.content.toLowerCase().indexOf("youre grandpap a trap") != -1) message.channel.sendMessage("no u");
  if(message.content.indexOf("XD") != -1) message.reply("please stop");
  if(message.content.indexOf("xD") != -1) message.reply("please stop");
  if(message.content.indexOf("x3") != -1) message.reply("please stop");
  if(message.content.indexOf("X3") != -1) message.reply("please stop");
  
  if(message.author.bot) return;
  if(message.channel.name === "serious" || message.channel.name === "venting" || message.channel.name === "ranting" ) return;

  sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
    if (!row) {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
    } else {
      var rand = 1;
      let mult = row.level + 1;
      let nextlevelxp = mult * mult * 5;
      if (row.points >= nextlevelxp) {
        row.level = row.level + 1;
        sql.run(`UPDATE scores SET points = ${row.points + rand}, level = ${row.level} WHERE userId = ${message.author.id}`);
        message.reply(`Check it, you just levelled up to level **${row.level}** bro!`);
        message.react(client.emojis.find("name", "levelup"));
      }
      sql.run(`UPDATE scores SET points = ${row.points + rand} WHERE userId = ${message.author.id}`);
    }
  }).catch(() => {
    console.error;
    sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
    });
  });
}