// Credits:
// Physical Programming: Hyperz#0001
// Helpful Sources: discord.js.org, DiscordJS Discord Server
// Special Thanks: LukaGaming#8725 for help with presence & Monbrey#4502 with his MessageEmbed knowledge!

const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, presname, prestype, presstatus, botimageurl, colorhex, serverinvite, voicechanneltojoin } = require('./config.json');
const ws = require('ws');
const { error } = require('console');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

// Here is where you can set the bots status!
client.on('ready', () => {
client.user.setPresence({ activity: { name: `${presname}`, type: `${prestype}` }, status: `${presstatus}` })
  .catch(console.error);
// Connects to the voice channel ID in config.json
  const channel = client.channels.cache.get(voicechanneltojoin);
if (!channel) return console.error("The voice channel does not exist (change config voicechanneltojoin)!");
channel.join().then(connection => {
  console.log("Successfully connected to the voice channel!");
}).catch(e => {
  console.error(e);
});
// Tells you the bot is online & ready in the console!
console.log(`${client.user.tag}, By Hyperz#0001 is now READY!`);
});

// My command handler (its really basic, shut up, I know...)
client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'ping'){
      client.commands.get('ping').execute(message, args);
  } else if (command == 'creator'){
      client.commands.get('creator').execute(message, args);
  } else if (command == 'user'){
    client.commands.get('user').execute(message, args);
  } else if (command == 'help'){
    client.commands.get('help').execute(message, args);
  } else if (command == 'kick'){
    client.commands.get('kick').execute(message, args);
  } else if (command == 'ban'){
    client.commands.get('ban').execute(message, args);
  } else if (command == 'purge'){
    client.commands.get('purge').execute(message, args);
  } else if (command == 'avatar'){
    client.commands.get('avatar').execute(message, args);
  } else if (command == 'dice'){
    client.commands.get('dice').execute(message, args);
  } else if (command == 'invite'){
    client.commands.get('invite').execute(message, args);
  } else if (command == 'getrandyoutofhererightnowcommand'){
    client.commands.get('ban').execute(message, args);
  }
});

// Knock Knock jokes are here... (yeah, I know, mega cringe...)
var jokes = [
    { name: 'Dozen', answer: 'anybody want to let me in?' },
    { name: 'Avenue', answer: 'knocked on this door before?' },
    { name: 'Ice Cream', answer: 'if you don\'t let me in!' },
    { name: 'Adore', answer: 'is between us. Open up!' },
    { name: 'Lettuce', answer: 'in. Its cold out here!' },
    { name: 'Bed', answer: 'you can not guess who I am.' },
    { name: 'Al', answer: 'give you a kiss if you open the door.' },
    { name: 'Olive', answer: 'you!' },
    { name: 'Abby', answer: 'birthday to you!' },
    { name: 'Rufus', answer: 'the most important part of your house.' },
    { name: 'Cheese', answer: 'a cute girl.' },
    { name: 'Wanda', answer: 'hang out with me right now?' },
    { name: 'Ho-ho.', answer: 'You know, your Santa impression could use a little work.' },
    { name: 'Mary and Abbey.', answer: 'Mary Christmas and Abbey New Year!' },
    { name: 'Carmen', answer: 'let me in already!' },
    { name: 'Ya', answer: 'I’m excited to see you too!' },
    { name: 'Scold', answer: 'outside—let me in!' },
    { name: 'Robin', answer: 'you! Hand over your cash!' },
    { name: 'Irish', answer: 'you a Merry Christmas!' },
    { name: 'Otto', answer: 'know whats taking you so long!' },
    { name: 'Needle', answer: 'little help gettin in the door.' },
    { name: 'Luke', answer: 'through the keyhole to see!' },
    { name: 'Justin', answer: 'the neighborhood and thought Id come over.' },
    { name: 'Europe', answer: 'No, you are a poo' },
    { name: 'To', answer: 'To Whom.' },
    { name: 'Etch', answer: 'Bless You!' },
    { name: 'Mikey', answer: 'doesnt fit through this keyhole' }
]

// Choosing a random joke ones listed above!
var knock = function() {
    var joke = jokes[Math.floor(Math.random() * jokes.length)]
    return formatJoke(joke)
}

// Properly formatting this joke!
function formatJoke(joke) {
    return [
        'Knock, knock.',
        'Who’s there?',
        joke.name + '.',
        joke.name + ' who?',
        joke.name + ' ' + joke.answer
    ].join('\n')
}

// The (prefix)knock command!
client.on('message', (message) => {
    if (message.content.includes(`${prefix}knock`)) {
        const msg = message.content.split(' ');

            message.reply(knock());
       
    }
});

//Uncomment this section (remove the "//" in the beginning of each line of code) to auto log messages sent in servers.
// client.on('message', (message) => {
//     if (message.author.bot) return;
//     console.log(`[${message.author.tag}]: ${message.content}`);
// })

client.on('message', message => {
    if(message.content === 'abcdefghijklmnopqrstuvwxyz')
    message.channel.send('I was __created__ by: <@704094587836301392>')
});

client.on('message', message => {
  if(message.content === 'hyperz')
  message.channel.send('Hyperz is fucking amazing, literally change my mind, oh wait, you cant because he programmed me into saying this regardless of what my bot brain actually thinks... POGGERS!')
});

client.on('message', message => {
  if(message.content === 'am I gay?')
  message.channel.send('Hell Yes...')
});

client.on('message', message => {
  if(message.content === 'drop a nuke')
  message.channel.send('no, I dont think I will...')
});

// Logs the bot in
client.login(token);

// Credits:
// Physical Programming: Hyperz#0001
// Helpful Sources: discord.js.org, DiscordJS Discord Server
// Special Thanks: LukaGaming#8725 for help with presence & Monbrey#4502 with his MessageEmbed knowledge!
