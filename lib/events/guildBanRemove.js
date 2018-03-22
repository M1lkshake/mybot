exports.run = (client, guild, user) => {
	const logger = require("../plugins/logging.js");
	const Discord = require("discord.js");
	logger.log(`Someone has unbanned user ${user.tag} from guild ${guild.name}`, "MODLOG", `bgBlue`);
	const channel = guild.channels.find("name", "modlog");
	if(channel) {
		const embed = new Discord.RichEmbed()
		.setTitle("User Unbanned")
		.setColor(0x00FF00)
		.setAuthor(user.tag, user.avatarURL)
		.setTimestamp()
		.setDescription(user.tag);
		channel.send({embed});
	}
}