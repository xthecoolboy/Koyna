const { RichEmbed } = require('discord.js');
const nameToImdb = require("name-to-imdb");
const imdb = require('imdb');

module.exports = {
  name: 'imdb',
  description: 'Get info about Movies',
  guildOnly: true,
  aliases: ['movie'],
  usage: 'string',
  cooldown: 3,
  execute(client, message, args) {
    if (!args) return message.channel.send('Enter a movie to search for!');
    let movie = args.join(' ')
    nameToImdb({name: movie}, function(err, res, inf){
      let movie_id = res;
      console.log(res);
      imdb(movie_id, function(err, data) {
        if (data)
        var embed;
        embed = new RichEmbed()
        .setTitle(data.title)
        .setThumbnail(data.poster)
        .setDescription(`**Description:** ${data.description}\n**Rating:** ${data.rating}\n**Genre:**${data.genre}`)
        .setFooter(`Metascore: ${data.metascore}`)
        .setTimestamp(new Date())
        message.channel.send(embed)
        if (err)
          message.channel.send(`Can't find that movie!`);
        });
      });
  },
};
