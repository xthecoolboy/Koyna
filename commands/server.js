const { RichEmbed } = require('discord.js');

module.exports = {
	name: 'server',
	description: 'Get server/guild info.',
  guildOnly: true,
	aliases: ['serverinfo', 'guildinfo', 'guild'],
	usage: '[command]',
	cooldown: 3,
	execute(client, message, args) {
		//server categories
		let chnlCat = message.guild.channels.map(c => {
      return `${c.type == 'text' || c.type == 'voice'? '': c.name}`
    }).filter(c => c != '').sort();
		
		//server channels
		let textChnl = message.guild.channels.map(c => {
      return `${c.type == 'category' || c.type == 'voice'? '': c.name}`
    }).filter(c => c != '').sort();
		
		//voice channels
		let voiceChnl = message.guild.channels.map(c => {
      return `${c.type == 'category' || c.type == 'text'? '': c.name}`
    }).filter(c => c != '').sort();
		
		//var afkChannel;
		//if(message.guild.afkChannel === null) {
			//afkChannel == 'None';
		//} else {
			//afkChannel == `${message.guild.afkChannel}`;
    //}
		
		let embed = new RichEmbed()
    	.setColor('RANDOM') // Random color everytime
    	.setTitle(`**${message.guild.name} [${message.guild.id}]**`) 
    	.setThumbnail(message.guild.iconURL)
    	//.addField("ServerName:", message.guild.name)
    	//.addField("ServerID:", message.guild.id)
			.addField(`**Roles**`, message.guild.roles.map(r => r.name).sort().splice(1).join(', '))
			.addField(`Channels:`, `> **${textChnl.length}** Text, **${voiceChnl.length}** Voice, **${chnlCat.length}** Categories.
				> AFK: **${message.guild.afkChannel}**`)
			.addField(`Members:`, `> ${message.guild.memberCount} members
				> Owner: **${message.guild.owner}** (ID: **${message.guild.owner.id}**)`, true)
    	//.addField("CreatedAt:", message.guild.createdAt)
    	//.addField("Owner:", message.guild.owner)
    	//.addField("OwnerId:", message.guild.owner.id)
    	//.addField("MemberCount:", message.guild.memberCount)
			.addField(`Other:`, `> Roles: **${message.guild.roles.size}**
				> Region: **${message.guild.region.slice(0,1).toUpperCase()}${message.guild.region.slice(1)}**
				> Created at: **${message.guild.createdAt}**
				> Verification Level: **${message.guild.verificationLevel}**`)
    	//.addField("VerificationLevel:", message.guild.verificationLevel)
    	//.addField("Region:", `${message.guild.region.slice(0,1).toUpperCase()}${message.guild.region.slice(1)}`)
    	//.setTimestamp(new Date())
    	//.setFooter(`Requested by: ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL)
    	message.channel.send(embed)
	},
};
