module.exports = {
	name: 'dm',
	description: 'DM's a user.',
  guildOnly: true,
  usage: '[mention message]'
	execute(client, message, args) {
    let User = message.guild.member(message.mentions.users.first() || message.author || message.guild.members.get(args[0]));
		if(!User) return message.channel.send("Mention a user!");
    let dMessage = args.slice(1).join(' ');
    if(!dMessage) return message.channel.send('Specify a message!');
		message.delete()
		message.channel.send("DM Sent")
    message.User.send(dMessage)
		//client.guilds.get("496197306882719755").channels.get("582068551633076231").send(embed);
	},
};
