exports.run = (client, message, args) => {
  const search = require("youtube-search");
  const Discord = require("discord.js");

  var opts = {
    maxResults: 1,
    key: "AIzaSyACZl9I79ryVVQedlzlKqNhX6xpU0sOe1U"
  };

  var videotosearch = args.join(' ');

  search(videotosearch, opts, function(err, results) {
    results.map(function (r) {
      const embed = new Discord.RichEmbed()
      .setTitle(r.title)
      .setThumbnail(r.thumbnails.default.url)
      .addField("Link", r.link)
      .addField("Description", r.description)
      .setFooter(`Uploaded by ${r.channelTitle}`, message.author.avatarURL)
      .setColor(0xFF0000)
      .setTimestamp();

      message.channel.send({embed});
    });
  });
}
