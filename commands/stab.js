exports.run = (client, message, args) => {
  if(!args[0]) return;
  if(args[0]) {
    var str1 = args[0].split("_").join(" ");
  }
  if(args[1]) {
    var str2 = args[1].split('_').join(' ');
    var mode = 'double';
  } else if(!str2) {
    var mode = 'single';
  }

  if(mode == 'double') {
    message.channel.send(`${message.author.toString()} has stabbed ${str1} with ${str2}!`);
  } else if(mode == 'single') {
    message.channel.send(`${message.author.toString()} has stabbed ${str1}!`);
  }
}
