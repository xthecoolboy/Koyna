module.exports = {
	name: 'reboot',
	description: 'Reloads the bot.',
    guildOnly: true,
	aliases: ['reset', 'logout'],
    usage: '[command]',
    cooldown: 3,
    execute(client, message, args) {
		client.destroy() /*destroying the bot login status*/
    	client.login(process.env.TOKEN) /*logging back in into discord*/
    	message.channel.send(`Rebooted successfully. API latency is ${Math.round(client.ping)}ms`);
    },
};

