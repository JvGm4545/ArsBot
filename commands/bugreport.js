const Discord = require('discord.js');
const moment = require('moment');

const cooldown = new Set();
exports.run = (client, message) => {
    let args = message.content.split(' ').slice(1).join(' ');
    message.delete();

    if (cooldown.has(message.author.id && message.guild.id)) {
        return message.reply('**[COOLDOWN]** Bugreport command has **5 Minutes** Cooldown!');
    }
    if (args.length < 1) {
        return message.reply('You must supply me full reportation!');
    }
    cooldown.add(message.author.id && message.guild.id);

    setTimeout(() => {
        cooldown.delete(message.author.id && message.guild.id);
    }, 300000);
    let guild = message.guild;
    const cnl = client.channels.get('316266748670115843');
    message.reply('Hey we got your report , we will reply soon as possible here is the full reportation:');
    const embed2 = new Discord.RichEmbed()
  .setAuthor(`Report from ${message.author.tag}`, message.author.displayAvatarURL)
  .addField('Report:', `**Report's Author:** ${message.author.tag}\n**Server:** ${guild.name}\n**Full report:** ${args}`)
  .setThumbnail(message.author.displayAvatarURL)
  .setFooter(`${moment().format('MMMM Do YYYY, h:mm:ss a')}`)
  .setColor(16711728);
    message.channel.send({embed: embed2});
    const embed = new Discord.RichEmbed()
  .setAuthor(`Report from ${message.author.tag}`, message.author.displayAvatarURL)
  .addField('Report:', `**Report's Author:** ${message.author.tag}\n**Server:** ${guild.name}\n**Full report:** ${args}`)
  .setThumbnail(message.author.displayAvatarURL)
  .setColor(16711728);
    cnl.send({embed})
  .catch(e => logger.error(e))
// In your command
};

module.exports.help = {
    name: 'bugreport'
};
