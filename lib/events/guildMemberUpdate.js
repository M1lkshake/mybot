exports.run = (client, oldMember, newMember) => {
	var oldnick = oldMember.user.username;
	var newnick = newMember.nickname;
	const logger = require("../plugins/logging.js");

	if(newMember.nickname === null) {
		logger.log(`${newMember.user.tag}'s nickname has been reset.`);
		return;
	}

	if(oldMember.nickname) {
		if(oldMember.nickname != newnick) {
			logger.log(`${newMember.user.tag}'s nickname has been changed to "${newnick}" from "${oldnick}".`);
		}
	} else if(!oldMember.username) {
		if(oldnick != newnick) {
			logger.log(`${newMember.user.tag}'s nickname has been changed to "${newnick}" from "${oldnick}".`);
		}
	}
}