exports.run = (client) => {
  const fs = require("fs")
	const logger = require("../plugins/logging.js")
  
  	let config = JSON.parse(fs.readFileSync("./config/config.json", "utf8"))
  	const gamenames = ["Sweet jams. | Use =help for help, dog!", "Waiting for the next CQ Update. | Use =help for help, bro!", ""]
  	const gametypes = ["LISTENING", "PLAYING"]
  	const randnum = Math.floor(Math.random() * gamenames.length);


	logger.log(`Ready for ${client.guilds.size} servers, ${client.channels.size} channels, and ${client.users.size} users.`, 'READY', 'bgGreen');
	client.user.setPresence({
		game: {
		name: gamenames[randnum],
		type: gametypes[randnum]
		}
	});
	console.log(gamenames[randnum]);

	client.generateInvite(['ADMINISTRATOR']).then(link => {
  		console.log(`${link}`);
	}); 
}
