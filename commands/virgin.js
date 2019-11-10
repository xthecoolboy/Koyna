module.exports = {
    name: 'virgin',
    description: 'Check you virginity.',
    guildOnly : true,
    usage: '[mention user]',
    cooldown: 2,
    execute(client, message, args) {
      let User = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    	if(!User) return message.channel.send('Mention a user');
      //if(!args[0]) return message.channel.send("Ask a vaild question!");
      var sayings = ["is a virgin", "is not a virgin", "is neutral"]
      var result = Math.floor((Math.random() * sayings.length) + 0);
      message.channel.send(User + sayings[result])
    },
};
