exports.run = (client, message, args) => {
	message.mentions[0].kick();
}