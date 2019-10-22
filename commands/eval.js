const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'eval',
    description: 'Evaluates given arguments',
    guildOnly: true,
    aliases: ['ev', 'evaluate'],
    usage: ['pass required arguments'],
    cooldown: 2,
    execute(client, message, args) {
        if(message.author.id !== process.env.OwnerId) return message.channel.send("You are not the developer!");
        try {
            let evaled = eval(message.content.split(" ").slice(1).join(" ")) 
            let embed = new RichEmbed()
                .setTitle("REPL")
                .setDescription(evaled);

                console.log(evaled)
                message.channel.send(embed)
                message.react("right_emoji");
        }       catch(e) {
                message.channel.send(` ${e.name}: ${e.message}` );
                message.react("wrong_emoji")
        }
    },
};
