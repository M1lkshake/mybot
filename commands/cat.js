exports.run = (client, message, args) => {
  const cat = require("random-cat");

  message.reply(cat.get());
}
