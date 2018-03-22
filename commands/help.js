exports.run = (client, message, args) => {
  const fs = require("fs");
  const Discord = require("discord.js");

  let helptags = JSON.parse(fs.readFileSync("./lib/commands.json", "utf8"));
  
  if(!args[0]) {
    var embed = new Discord.RichEmbed()
    .setTitle("Help")
    .setColor(0x002222)
    .setDescription("Need help with anything? Message @Dave Strider#0502 for help, or find the help for a command using `=help <command name>`! You can also get a list of commands using `=help list`.");
    
    message.channel.send({embed});
  } else if(args[0] === "list") {
    var embed = new Discord.RichEmbed()
    .setTitle("Available Commands")
    .setColor(0x002222)
    .setDescription(`=8ball, =action, =avatar, =cat, =draw, =flip,\n=frombinary, =tobinary, =help, =nick, =paste, =reload,\n=roll, =rot, =rot13, =say, =shoot, =slots, =stab, =t,\n=tc, =ud, and =yt.`);
    message.channel.send({embed});

  } else {
    if(!helptags[args[0]]) message.reply("Command not found!"); return;
    var embed = new Discord.RichEmbed()
    .setTitle(args[0])
    .setColor(0x002222)
    .setDescription(helptags[args[0]]);
    
    message.channel.send({embed});
  }
  
}