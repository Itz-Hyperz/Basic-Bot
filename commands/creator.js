// Credits:
// Physical Programming: Hyperz#0001
// Helpful Sources: discord.js.org, DiscordJS Discord Server
// Special Thanks: LukaGaming#8725 for help with presence & Monbrey#4502 with his MessageEmbed knowledge!
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, presname, prestype, presstatus, botimageurl, colorhex, serverinvite } = require('../config.json');
const ws = require('ws');
const client = new Discord.Client();
module.exports = {
    name: 'creator',
    description: 'Shows the BOT Creator!',
    execute(message, arg){
    const creatorEmbed = new Discord.MessageEmbed()
    .setColor(colorhex)
    .setTitle(`Bot Creator`)
    .setURL('https://github.com/itz-hyperz')
    .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`, 'https://github.com/itz-hyperz')
    .setDescription(`This Bot was **Coded / Programmed** __By__: Hyperz#0001 ( 704094587836301392 )`)
    .setThumbnail('https://cdn.discordapp.com/attachments/763916287125749792/772565952583827476/logo.png')
    .setTimestamp()
    .setFooter('BasicBot Built By Hyperz#0001', 'https://cdn.discordapp.com/attachments/763916287125749792/772565952583827476/logo.png')
    
    message.channel.send(creatorEmbed)
    }
}

// Credits:
// Physical Programming: Hyperz#0001
// Helpful Sources: discord.js.org, DiscordJS Discord Server
// Special Thanks: LukaGaming#8725 for help with presence & Monbrey#4502 with his MessageEmbed knowledge!
