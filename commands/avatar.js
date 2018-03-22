exports.run = (client, message, args) => {
  if(!args[0]) {
    message.reply(message.author.avatarURL);
  } else if(message.mentions.members) {
    message.reply(message.mentions.members.first().user.avatarURL);
  };
}
