module.exports = {
	name: 'reboot',
	description: 'Reloads the bot.',
    guildOnly: true,
	aliases: ['reset', 'logout'],
    usage: '[command]',
    cooldown: 3,
    execute(client, message, args) {
		client.destroy()
    	client.login(process.env.TOKEN)
    	message.channel.send(`Rebooted successfully. API latency is ${Math.round(client.ping)}ms`);
    },
};
