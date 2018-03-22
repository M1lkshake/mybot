exports.run = (client, message, args) => {
  const convert = require("binary-to-string");

  var string = convert(args.join('').split(' ').join(''));

  message.reply(string);
}
