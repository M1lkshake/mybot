exports.run = (client, oldMsg, newMsg) => {
	const logger = require("../plugins/logging.js")
	const Discord = require("discord.js")
	logger.log(`Someone has edited a message with previous content "${oldMsg.content}" from user "${oldMsg.author.tag}" to have new content "${newMsg.content}`, "MODLOG", `bgBlue`);
	const channel = newMsg.guild.channels.find("name", "modlog");
	if(channel) {
		if(!message.author.bot == true) {
			const embed = new Discord.RichEmbed()
			.setTitle("Message Edited")
			.setColor(0xE00707)
			.setAuthor(oldMsg.author.tag, oldMsg.author.avatarURL)
			.setTimestamp()
			.addField("Previous Message Content", oldMsg.content)
			.addField("New Message Content", newMsg.content)
			.addField("Message Author", oldMsg.author.tag);
			channel.sendMessage({embed});
		}
	}
}