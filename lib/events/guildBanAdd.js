exports.run = (client, guild, user) => {
	const logger = require("../plugins/logging.js");
	const Discord = require("discord.js");
	logger.log(`Someone has banned user ${user.tag} from guild ${guild.name}`, "MODLOG", `bgBlue`);
	const channel = guild.channels.find("name", "modlog");
	const publicchannel = guild.channels.find("name", "joinlog");
	if(publicchannel) {
		const embed2 = new Discord.RichEmbed()
		.setTitle("User Banned!")
		.setColor(0xFF0077)
		.setAuthor(user.tag, user.avatarURL)
		.setTimestamp()
		.setDescription(`${user.tag} was banned.`);
		publicchannel.send({embed2});
	}
	if(channel) {
		const embed = new Discord.RichEmbed()
		.setTitle("User Banned")
		.setColor(0xE00707)
		.setAuthor(user.tag, user.avatarURL)
		.setTimestamp()
		.addField("User Banned", user.tag);
		channel.send({embed});
	}
}