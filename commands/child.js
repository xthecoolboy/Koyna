const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'child',
    description: 'Random virginity calculator.',
    guildOnly : true,
    usage: '[mention user]',
    cooldown: 2,
    execute(client, message, args) {
      let User = message.guild.member(message.mentions.users.first() || message.author || message.guild.members.get(args[0]));
      if(!User) return message.channel.send('Mention a user!');
      //if(!args[0]) return message.channel.send("Ask a vaild question!");
      var sayings = [" no", " 2", " 3", " 4", " 5", " 6", " 7", " 8", " 9", " 10", " 11", " 12"]
      var result = Math.floor((Math.random() * sayings.length) + 0);
      let embed = new RichEmbed()
      .setTitle('Virginity Test')
      .setColor('#ed2c09')
      .setDescription(`${User} will have sayings[result] kids`)
      message.channel.send(embed)
    },
};
