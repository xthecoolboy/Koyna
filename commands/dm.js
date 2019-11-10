module.exports = {
	name: 'dm',
	description: 'DMs a user.',
  guildOnly: true,
  usage: ['mention message'],
	cooldown: 2,
	execute(client, message, args) {
    let User = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
		if(!User) return message.channel.send("Mention a user!").then(m => {m.delete(8000)});
    let dMessage = args.slice(1).join(' ');
    if(!dMessage) return message.channel.send('Specify a message!').then(m => {m.delete(8000)});
		message.delete()
		message.channel.send("DM Sent")
    message.User.send(dMessage)
		//client.guilds.get("496197306882719755").channels.get("582068551633076231").send(embed);
	},
};
