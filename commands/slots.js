exports.run = (client, message, args) => {
	const Discord = require("discord.js");
	var emojipool = [":clubs:", ":diamonds:", ":hearts:", ":spades:"];
	var random1 = emojipool[(Math.floor(Math.random() * emojipool.length))];
	var random2 = emojipool[(Math.floor(Math.random() * emojipool.length))];
	var random3 = emojipool[(Math.floor(Math.random() * emojipool.length))];
	var send = random1 + random2 + random3;

	var result = "No result yet!";

	if(random1 === random2 && random2 === random3) result = "You got three in a row.";
	if(random1 === random2 && random2 !== random3) result = "You got two out of three, try again.";
	if(random2 === random3 && random3 !== random1) result = "You got two out of three, try again.";
	if(random1 !== random2 && random2 !== random3 && random3 !== random1) result = "You didn't get a single one right. Good job.";

	const embed = new Discord.RichEmbed()
	.setTitle("Slots")
	.setColor(0x002222)
	.addField("Slot results:", send)
	.setDescription(result);

	message.channel.send({embed});
}