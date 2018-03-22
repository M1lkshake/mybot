exports.run = (client, member) => {
	if(member.guild.id === "405493033686269953") return;
	if(member.guild.id === "403382465315471392") return;
	if(member.guild.id === "400168237133987840") return;
	const Discord = require("discord.js");
	const embed = new Discord.RichEmbed()
	.setTitle("New Member!")
	.setAuthor(member.user.username, member.user.avatarURL)
	.setTimestamp()
	.setDescription(`What's crackin', ${member.user.toString()}, y'all know who it is! Welcome to my studio yo!`)
	.setColor(0xFFC655);
	const defaultChannel = member.guild.channels.find("name", "joinlog");
	defaultChannel.send({embed});
	const role = member.guild.roles.find("Name", "???");
	member.addRole(role);
}
