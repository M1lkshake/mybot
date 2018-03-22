exports.run = (client, message, args) => {
  const rot = require('rot');
  
  message.reply(rot(args.join(' ')));
}