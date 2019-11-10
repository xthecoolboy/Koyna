const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'gender',
    description: 'Random gender calculator.',
    guildOnly : true,
    usage: '[mention user]',
    cooldown: 2,
    execute(client, message, args) {
      let User = message.guild.member(message.mentions.users.first() || message.author || message.guild.members.get(args[0]));
      if(!User) return message.channel.send('Mention a user!');
      //if(!args[0]) return message.channel.send("Ask a vaild question!");
      var sayings = [" is male", " is female", " is lesbian", " is gay", " is shemale", " is neutral"]
      var result = Math.floor((Math.random() * sayings.length) + 0);
      let embed = new RichEmbed()
      .setTitle('Gender Test')
      .setColor('#ed2c09')
      .setDescription(User + sayings[result])
      message.channel.send(embed)
    },
};
