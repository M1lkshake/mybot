exports.run = (client, message, args) => {
	const search = require("youtube-search");
	const Discord = require("discord.js");
	var opts = {
    	maxResults: 1,
    	key: "AIzaSyACZl9I79ryVVQedlzlKqNhX6xpU0sOe1U"
	};
	const videotosearch = args.join(' ');
	search(videotosearch, opts, function(err, results) {
	    results.map(function (r) {
			const ytdl = require('ytdl-core');
			const voiceChannel = message.member.voiceChannel;
			const streamOptions = { seek: 0, volume: 1 };
			const embed = new Discord.RichEmbed()
			.setTitle("Now Playing")
			.setDescription(r.title)
			.setColor(0xFF0000)
			.setFooter(`Uploaded by ${r.channelTitle}`, message.author.avatarURL)
			.setThumbnail(r.thumbnails.default.url)
			.addField("Link", r.link);
			message.channel.sendMessage({embed});
			voiceChannel.join()
			.then(connection => {
				const stream = ytdl(r.link, { filter : 'audioonly' });
				const dispatcher = connection.playStream(stream, streamOptions).then(intent => {
					
				});
			})
		.catch(console.error);
	    })
	})
}