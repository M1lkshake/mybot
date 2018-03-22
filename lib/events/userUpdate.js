exports.run = (client, oldUser, newUser) => {
	const logger = require("../plugins/logging.js")
	const Discord = require("discord.js")
	if(oldUser.tag == newUser.tag) {
	} else {
		logger.log(`${oldUser.tag} has changed their usertag to ${newUser.tag}`, "MODLOG", `bgBlue`);
		const channel = client.channels.find("name", "modlog");
		if(channel) {
			const embed = new Discord.RichEmbed()
			.setTitle("Username/Tag Edited")
			.setColor(0x4AC925)
			.setAuthor(newUser.tag, newUser.avatarURL)
			.setTimestamp()
			.addField("Previous Tag", oldUser.tag)
			.addField("New Tag", newUser.tag);
			channel.send({embed});
		}
	}
}