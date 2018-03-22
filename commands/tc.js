exports.run = (client, message, args) => {
	const fs = require("fs");
	const chalk = require("chalk");
	//const log = require("./lib/plugins/logging.js");

	let tags = JSON.parse(fs.readFileSync("./lib/tags.json", "utf8"));

	var testing = args;
	var cmd = testing.shift();
	var joined = testing.join(' ');
	tags[cmd] = joined;

	console.log(`Tag ${cmd} added to the database.`); // chalk.bgBlue([tags]));
  	message.reply(`Tag ${cmd} added!`)

	fs.writeFile("./lib/tags.json", JSON.stringify(tags), err => {
		if (err) console.log(err);
	});
}
