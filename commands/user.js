const { RichEmbed } = require('discord.js');
const moment = require('moment');

module.exports = {
	name: 'user',
	description: 'Get details about someone.',
  guildOnly: true,
	aliases: ['userinfo', 'whois'],
  usage: '[mention]',
  cooldown: 3,
  execute(client, message, args) {
    let member = message.mentions.users.first() || message.author;
    let id = client.users.get(member.id).id;
		let Joined_At = moment(message.guild.members.get(member.id).joinedAt);
		let Created_At = moment(member.createdAt);
		let Joined = Joined_At.format('MMMM Do YYYY, h:mm:ss a');
		let Created = Created_At.format('MMMM Do YYYY, h:mm:ss a');
    let embed = new RichEmbed()
			.setColor(message.guild.member(member).highestRole.color)
      .setThumbnail(member.displayAvatarURL)
      .setTitle(`Here is ${member.username}'s info.`)
			.setDescription(`> ID: **${member.id}** 
				> Tag: **${member.tag}**
				> Nickname: **${message.guild.member(member).nickname ? message.guild.member(member).nickname : "None"}**
				> Created At: **${Created}**
				> Joined At: **${Joined}**
				> Bot: **${member.bot ? "Yes" : "No"}**
				> Game: **${message.guild.member(member).presence.game ? message.guild.member(member).presence.game.name : "Not Playing"}**`)
			.addField(`**Roles**`, message.guild.members.get(id).roles.map(r => `<@&${r.id}>`).slice(1).join(", "))
      //.addField(`Name:`, member.username, true)
      //.addField("Nickname:", message.guild.member(member).nickname ? message.guild.member(member).nickname : "None", true )
      //.addField(`ID:`, member.id, true)
      //.addField("CreatedAt:", member.createdAt, true)
      //.addField("JoinedAt:", message.guild.members.get(member.id).joinedAt)
      //.addField(`Bot:`, member.bot ? "Yes" : "No", true)
      //.addField("Game:", message.guild.member(member).presence.game ? message.guild.member(member).presence.game.name : "Not Playing", true) // the ? and : are like an if statement if (message.guild.member(member).presence.game ) { message.guild.member(member).presence.game.name } else "Not Playing"
      //.addField("Roles : ", message.guild.members.get(id).roles.map(r => `<@&${r.id}>`).slice(1).join(", "))
      .setTimestamp(new Date())
      .setFooter(message.guild.name)
		message.channel.send(embed);
		},
};
