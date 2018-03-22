exports.run = (client, message, args) => {
	if(!args[0]) {
		if(message.member.hasPermission("MANAGE_MESSAGES")) {
			message.channel.bulkDelete(20);
			message.reply("No amount of messages given, defaulting to 20.");
		}
	} else {
		if(message.member.hasPermission("MANAGE_MESSAGES")) {
			message.channel.bulkDelete(args[0]);
		}
	}
}