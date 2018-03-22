exports.run = (client, message, args) => {
  const rot = require("rot");
  const string = args;
  const num = string.shift();
  
  var rotated = rot(string.join(' '), num);
  message.reply(rotated);
}
