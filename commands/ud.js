exports.run = (client, message, args) => {
  const ud = require('urban-dictionary');
  const Discord = require('discord.js');
  const logger = require('../lib/plugins/logging.js');

  var word = args.join(' ');


  ud.term(word, function (error, entries, tags, sounds) {
  if (error) {
    if(!entries){
      message.reply(`${word} is undefined!`);
      return;
    }
    message.reply(`Error! Please ping @Dave Strider as soon as he is online. Error: ${error}`);
    logger.err(error.message);
  } else { 
    var embed = new Discord.RichEmbed()
    .addField("Definition", entries[0].definition)
    .setTitle(entries[0].word)
    .setThumbnail(message.author.avatarURL)
    .setColor(0xEFFF00)
    .addField("Example", entries[0].example)
    .setFooter(`Upvotes: ${entries[0].thumbs_up}, Downvotes: ${entries[0].thumbs_down}`, "https://i.imgur.com/60knQyq.png");
    message.channel.send({embed});
  }
})
}
