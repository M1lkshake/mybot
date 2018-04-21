exports.run = (client, message, args) => {
	const sql = require("sqlite");
	sql.open("./score.sqlite");

	if(message.author.bot) return;

	if(message.mentions.members.first() !== undefined) {
		sql.get(`SELECT * FROM scores WHERE userId ="${message.mentions.members.first().user.id}"`).then(row => {
			message.reply(`${message.mentions.members.first().user.tag} has ${row.points} points, and they are level ${row.level}`);
		});
	} else {
		sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
      let mult = row.level + 1;
      let nextlevelxp = mult * mult * 5;            
			message.reply(`You have ${row.points} points out of ${nextlevelxp}, and you are level ${row.level}`);
		});
	}
}