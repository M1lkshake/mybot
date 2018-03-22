exports.run = (client, message, args) => {
  const convert = require("string-to-binary");

  var string = convert(args.join(' '));

  message.reply(string);
}
