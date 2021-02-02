// Credits:
// Physical Programming: Hyperz#0001
// Helpful Sources: discord.js.org, DiscordJS Discord Server
// Special Thanks: LukaGaming#8725 for help with presence & Monbrey#4502 with his MessageEmbed knowledge!
const Discord = require('discord.js');
const { Guild } = require("discord.js");
const fs = require('fs');
const ws = require('ws');
module.exports = {
    name: 'kick',
    description: 'Kicks the mentioned user!',
    execute(message, arg){
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user)
            if (member) {
                member
                .kick(`Kicked by ${message.author.username}`)
                .then(() => {
                    message.reply(`Successfully kicked ${user.tag}!`);
                })
                .catch(err => {
                    message.reply('I was unable to kick the member!');
                    console.log(err)
                });
            } else {
                message.reply("That user isnt in the guild!")
            }
        } else {
            message.reply("You didnt mention the user to kick!")
        }
    }
}

// Credits:
// Physical Programming: Hyperz#0001
// Helpful Sources: discord.js.org, DiscordJS Discord Server
// Special Thanks: LukaGaming#8725 for help with presence & Monbrey#4502 with his MessageEmbed knowledge!