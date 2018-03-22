exports.run = (client, message, args) => {
  var action = args.join(' ');

  message.channel.send(`* ${message.author.toString()} ${action} *`);
}
