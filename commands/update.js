exports.run = (client, message, args) => {
  const Discord = require("discord.js");
  const embed = new Discord.RichEmbed().setTitle("NoiseBot is now on update V1.1").setDescription("=cowsay has been added. Try it out, bro!\nSeveral other internal changes for speed have been made too, but no one cares about those.").setColor(0xFF0077).setTimestamp();
  
  if(message.author.id === "140881480107819008") {
    message.channel.send({embed});
  }
  
}