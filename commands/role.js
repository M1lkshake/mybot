exports.run = (client, message, args) => {
	const Discord = require('discord.js');
	const argpush = args.shift();
	const role = message.guild.roles.find("name", args.join(' '));
	var dontadd = ["Owner", "Co-Owner", "Tatsumaki", "Family", "admin", "mods", "Administrators", "Moderators", "Respected Members", "Bots", "Starboard", "NoiseBot", "Noisemaster's Machines"];
	if(!role){
		message.reply("That role does not exist!");
	} else if(!dontadd.includes(role.name)){
		if(argpush === "remove") {
			message.member.removeRole(role, "Used =role command.");
			message.reply(`You have removed role: ${role.name} from yourself.`);
		} else if(argpush === "add") {
			message.member.addRole(role, "Used =role command.");
			message.reply(`You now have role: ${role.name}`);
		} else {
		message.reply(`You can't give a staff role to yourself!`);	
		}
	}
}