exports.run = (client, message, args) => {
	const Discord = require('discord.js');
	const argpush = args.shift();
	const role = message.guild.roles.find("name", args.join(' '));
	var dontadd = ["Owner", "Co-Owner", "Tatsumaki", "Kannabot", "Family", "Administrators", "Moderators", "Respected Members", "Bots", "Starboard", "NoiseBot", "Noisemaster's Machines"]
	/*
	if(message.author.hasPermission("MANAGE_ROLES")) {
		const mods = message.guild.roles.find("name", "Administrators");
		const coowner = message.guild.roles.find("name", "Co-Owner (family)");
		if(message.author.hasRole(mods)) {
			var dontadd = ["Owner, Co-Owner (family)", "Tatsumaki", "Kannabot", "Administrators", "Bots"];
		} else if(message.author.hasRole(coowner)) {
			var dontadd = ["Owner, Co-Owner (family)", "Tatsumaki", "Kannabot"];
		} else if(message.author.hasRole(owner)) {
			var dontadd = ["Kannabot", "Tatsumaki"]
		}
	}
	*/
	if(!role){
		message.reply("That role does not exist!");
	} else if(!dontadd.includes(role.name)){
		if(argpush === "remove") {
			message.member.removeRole(role, "Used => role command.");
			message.reply(`You have removed role: ${role.name} from yourself.`);
		} else if(argpush === "add") {
			message.member.addRole(role, "Used =>role command.");
			message.reply(`You now have role: ${role.name}`);
		} else {
		message.reply(`You can't give a staff role to yourself!`);	
		}
	}
}