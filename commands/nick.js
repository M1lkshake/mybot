exports.run = (client, message, args) => {
	var newnick = args.join(' ');
	const clog = require('../lib/plugins/logging.js');
	try {
		message.member.setNickname(newnick, "Requested by user.");
		message.reply(`Your nickname is now: ${newnick}`);
    clog.log()
	} catch(err) {
		clog.err(err);
	}
}
