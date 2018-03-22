exports.run = (client, message, args) => {
    var splitted = args[0].split('d');
    var sides = splitted[1];
    var amount = splitted[0];
    var d = [];
    var da = 0;
    var i;
  
    if(amount == 0) { message.channel.send("You cannot roll 0 dice!"); return; };
    if(sides == 0 || sides == 1) { message.channel.send("You have to have more than 1 face per die!"); return; };
  
    if(amount != 1) {
      console.log(amount)
      for (i = 0; i < amount; i++) {
        var rand = Math.floor((Math.random() * sides) + 1)
        console.log(rand);
        d.push(rand);
        da += rand;
      }
    } else if (amount == 1) {
      var rand = Math.floor((Math.random() * sides) + 1)
      da += rand;
    }
    var result = d.join(", ");
    if(amount != 1) {
      message.reply(`You rolled a ${da}, or in more detail (This is every roll!): ${result}`);
    } else if(amount == 1) {  
      message.reply(`You rolled ${da}.`);
    }
}
