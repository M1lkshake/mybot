exports.run = (client, message, args) => {
  if(message.member.hasPermission("ADMINISTRATOR")) {
	  if(!args || args.size < 1) return message.reply("Must provide a command name to reload.");
	  // the path is relative to the *current folder*, so just ./filename.js
	  delete require.cache[require.resolve(`./${args[0]}.js`)];
	  message.reply(`The command ${args[0]} has been reloaded`);
  } else {
  	message.reply("You must be an admin to use this command.");
  }
};