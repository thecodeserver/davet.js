const Discord = require('discord.js');

exports.run = (client, message) => {
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle('Bot Davet Linki')
    .setDescription(`[Tıkla!]( https://discord.com/oauth2/authorize?client_id=737569780193558591&scope=bot&permissions=8)`)
    message.channel.send(embed)
};

exports.conf = {
    enabled: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'davet',
    description: '',
    usage: 'davet'
}