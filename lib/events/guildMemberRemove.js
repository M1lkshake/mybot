/*exports.run = (client, member) => {
	if(member.guild.id === "405493033686269953") return;
	if(member.guild.id === "403382465315471392") return;
	if(member.guild.id === "400168237133987840") return;
	const Discord = require("discord.js");
	const embed = new Discord.RichEmbed()
	.setTitle("Member Left!")
	.setAuthor(member.user.username, member.user.avatarURL)
	.setTimestamp()
	.setDescription(`See you later, ${member.user.username}.`)
	.setColor(0xFF4949);
	const defaultChannel = member.guild.channels.find("name", "joinlog");
	defaultChannel.send({embed});
}
*/