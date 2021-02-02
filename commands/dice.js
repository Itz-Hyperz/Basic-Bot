// Credits:
// Physical Programming: Hyperz#0001
// Helpful Sources: discord.js.org, DiscordJS Discord Server
// Special Thanks: LukaGaming#8725 for help with presence & Monbrey#4502 with his MessageEmbed knowledge!
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('../config.json');
const ws = require('ws');
module.exports = {
    name: 'dice',
    description: 'Rolls a dice!',
    execute(message, arg){
        if (message.content.toLowerCase().includes(`${prefix}dice`)) {
            var response = [Math.floor(Math.random() * ((100 - 1) + 1) + 1)];
        
           message.channel.send("You got... " + response + "!").then().catch(console.error);  // "You got... 96!"
        }
    }
}

// Credits:
// Physical Programming: Hyperz#0001
// Helpful Sources: discord.js.org, DiscordJS Discord Server
// Special Thanks: LukaGaming#8725 for help with presence & Monbrey#4502 with his MessageEmbed knowledge!