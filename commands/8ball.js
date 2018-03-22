exports.run = (client, message, args) => {
	var responsepool = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes, definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, please try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Very doubtful."];
	var rand = Math.floor(Math.random() * responsepool.length )
	message.reply(responsepool[rand]);
}