exports.run = (client, message, args) => {
  const suits = ['NA', ':clubs:', ':spades:', ':hearts:', ':diamonds:'];
  const index = ['NA', 'Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

  var rand1 = Math.floor((Math.random() * 4) + 1);
  var rand2 = Math.floor((Math.random() * 13) + 1);

  message.reply(`You drew a: ${index[rand2]} of ${suits[rand1]}!`);
}
