exports.run = (client, message, args) => {
	const saythis = args.join(' ');
	message.channel.send(saythis);
	message.delete();
}