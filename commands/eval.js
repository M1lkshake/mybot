exports.run = (client, message, args) => {
  eval(args.join(' '));
};
