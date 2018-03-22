exports.run = (client, message, args) => {
  var coinside = [
    'heads',
    'tails'
  ];
  var coinflip = Math.floor(Math.random()*coinside.length);

  message.reply(`your coin landed on ${coinside[coinflip]}.`);

}
