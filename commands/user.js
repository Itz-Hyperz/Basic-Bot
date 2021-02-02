// Credits:
// Physical Programming: Hyperz#0001
// Helpful Sources: discord.js.org, DiscordJS Discord Server
// Special Thanks: LukaGaming#8725 for help with presence & Monbrey#4502 with his MessageEmbed knowledge!
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, presname, prestype, presstatus, botimageurl, colorhex, serverinvite } = require('../config.json');
const ws = require('ws');
module.exports = {
    name: 'user',
    description: 'gives current user info in an embed!',
    execute(message, arg){
    const userEmbed = new Discord.MessageEmbed()
    .setColor(colorhex)
    .setTitle(`Account Info for ${message.author.tag}`)
    .setURL(serverinvite)
    .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`, 'https://discord.gg/d5Wbegw')
    .setThumbnail(message.guild.iconURL())
    .addFields(
        { name: 'Tag:', value: `${message.author.tag}`},
        { name: 'ID:', value: `${message.author.id}`},
        { name: 'Account Creation:', value: `${message.author.createdAt}`},
    )
    .setTimestamp()
    .setFooter('BasicBot Built By Hyperz#0001', 'https://cdn.discordapp.com/attachments/763916287125749792/772565952583827476/logo.png')
    
    message.channel.send(userEmbed)
    }
}

// Credits:
// Physical Programming: Hyperz#0001
// Helpful Sources: discord.js.org, DiscordJS Discord Server
// Special Thanks: LukaGaming#8725 for help with presence & Monbrey#4502 with his MessageEmbed knowledge!