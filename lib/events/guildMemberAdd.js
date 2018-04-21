exports.run = (client, member) => {
	const Discord = require("discord.js");
	const embed = new Discord.RichEmbed()
	.setTitle("New Member!")
	.setAuthor(member.user.username, member.user.avatarURL)
	.setTimestamp()
	.setDescription(`What's crackin', ${member.user.toString()}, y'all know who it is! Welcome to my studio yo!`)
	.setColor(0xFFC655);
	const defaultChannel = member.guild.channels.find("name", "joinlog");
  const tuyokiChannel = member.guild.channels.find("name", "tuyoki-joinlog");
	if(defaultChannel) defaultChannel.send({embed});
  if(tuyokiChannel) tuyokiChannel.send({embed});
	const role = member.guild.roles.find("name", "???");
  const yokirole = member.guild.roles.find("name", "Peasants");
  if(yokirole) member.addRole(yokirole);
  if(role) member.addRole(role);

}
