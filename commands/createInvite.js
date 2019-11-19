module.exports = {
	name: 'dm',
	description: 'DMs a user.',
  guildOnly: true,
  usage: ['mention message'],
	cooldown: 2,
	async execute(client, message, args) {
    let invite = await message.channel.createInvite({
    maxAge: 10 * 60 * 1000 //maximum time for the invite, in milliseconds
    maxUses: 1 //maximum times it can be used
    }
    message.reply(invite ? Here's your invite: ${invite} : "There has been an error during the creation of the invite.");
	},
};
