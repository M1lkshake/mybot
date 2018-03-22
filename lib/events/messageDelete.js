exports.run = (cilent, message) => {
	const logger = require("../plugins/logging.js")
	const Discord = require("discord.js")
		logger.log(`Someone has deleted a message with content "${message.content}" from user "${message.author.tag}"`, "MODLOG", `bgBlue`);
		const channel = message.guild.channels.find("name", "modlog");
	if(channel) {
		if(!message.author.bot == true) {
			const embed = new Discord.RichEmbed()
			.setTitle("Message Deleted")
			.setColor(0xFE5E00)
			.setAuthor(message.author.tag, message.author.avatarURL)
			.setTimestamp()
			.addField("Message Content", message.content)
			.addField("Message Author", message.author.tag)
			.addField("Message Channel", message.channel);
			channel.send({embed});
		}
	}
}
