exports.run = (client, oldMsg, newMsg) => {
	const logger = require("../plugins/logging.js");
	const Discord = require("discord.js");
	if(newMsg.content == oldMsg.content){

	} else {
		logger.log(`Someone has edit a message with previous content "${oldMsg.content}" from user "${oldMsg.author.tag}" to new content "${newMsg.content}`, "MODLOG", `bgBlue`);
		const channel = newMsg.guild.channels.find("name", "modlog");
		if(channel) {
			if(!newMsg.author.bot == true) {
				const embed = new Discord.RichEmbed()
				.setTitle("Message Edited")
				.setColor(0xA1A100)
				.setAuthor(oldMsg.author.tag, oldMsg.author.avatarURL)
				.setTimestamp()
				.addField("Previous Message Content", oldMsg.content)
				.addField("New Message Content", newMsg.content)
				.addField("Message Author", oldMsg.author.tag)
				.addField("Message Channel", oldMsg.channel);
				channel.send({embed});			
			}
		}
	}
}