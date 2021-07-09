const Discord = require('discord.js');
const {Collection} = require("discord.js");
const ms = require('ms');

const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const prefix = 'd.'; // prefix to use commands
const embedColor = '#f1f48b'; // color for any embeds

// to get into other js files
const path = require('path');
const fs = require('fs');

// go into commands folders
function readFiles(dir) {
    const maps = fs.readdirSync(dir, { withFileTypes: true });

    return maps.reduce((files, map) => {
        if (map.isDirectory()) {
            files.push(...readFiles(path.join(dir, map.name)));
        } else if (map.isFile()) {
            files.push(path.join(dir, map.name));
        }

        return files;
    }, []);
}

client.commands = new Discord.Collection();
const commandFiles = readFiles("commands").filter(file => file.endsWith('.js'));

for (const file of commandFiles){
    const command = require(path.join(__dirname, file));
    client.commands.set(command.name, command);
}

client.snipes = new Collection();

client.once('ready', () => {
    console.log('Daisy is online');
    client.user.setPresence({
        activity: {
            type: "PLAYING",
        },
        status: 'with people\'s hearts'
    })
    .catch(console.error);
});

client.on('guildMemberAdd', guildMember => {
    client.commands.get('welcome').execute(guildMember, Discord, embedColor);
});

client.on('guildMemberRemove', guildMember => {
    client.commands.get('exit').execute(guildMember, Discord);
});

// commands
client.on('message', message => {
    // check if command started with prefix
    if(!message.content.startsWith(prefix) || message.author.bot) return; // not with prefix

    const args = message.content.slice(prefix.length).split(/ +/); // with prefix
    const command = args.shift().toLowerCase();

    // help
    if(command === 'help'){
        client.commands.get('help').execute(message, Discord, embedColor);
    }

    // reaction commands
    else if(command === 'headpat'){
        client.commands.get('headpat').execute(message, Discord, embedColor);
    } else if (command == 'hug'){
        client.commands.get('hug').execute(message, Discord, embedColor);
    } else if (command == 'blush'){
        client.commands.get('blush').execute(message, Discord, embedColor);
    } else if (command == 'celebrate'){
        client.commands.get('celebrate').execute(message, Discord, embedColor);
    } else if (command == 'cheer'){
        client.commands.get('cheer').execute(message, Discord, embedColor);
    } else if (command == 'confused'){
        client.commands.get('confused').execute(message, Discord, embedColor);
    } else if (command == 'cry'){
        client.commands.get('cry').execute(message, Discord, embedColor);
    } else if (command == 'cuddle'){
        client.commands.get('cuddle').execute(message, Discord, embedColor);
    } else if (command == 'dance'){
        client.commands.get('dance').execute(message, Discord, embedColor);
    } else if (command == 'kiss'){
        client.commands.get('kiss').execute(message, Discord, embedColor);
    } else if (command == 'punch'){
        client.commands.get('punch').execute(message, Discord, embedColor);
    } else if (command == 'sleep'){
        client.commands.get('sleep').execute(message, Discord, embedColor);
    } else if (command == 'smack'){
        client.commands.get('smack').execute(message, Discord, embedColor);
    } else if (command == 'tackle'){
        client.commands.get('tackle').execute(message, Discord, embedColor);
    } else if (command == 'toss'){
        client.commands.get('toss').execute(message, Discord, embedColor);
    } else if (command == 'yeet'){
        client.commands.get('yeet').execute(message, Discord, embedColor);
    }

    // channels
    else if (command === 'reactionrole'){
        client.commands.get('reactionrole').execute(message, Discord, client, embedColor);
    } else if (command == 'rules'){
        client.commands.get('rules').execute(message);
    } else if (command == 'information'){
        client.commands.get('information').execute(message);
    }

    // moderation
    else if (command === 'clear'){
        client.commands.get('clear').execute(message, args);
    } else if (command === 'kick'){
        client.commands.get('kick').execute(message, Discord, embedColor, args);
    } else if (command === 'ban'){
        client.commands.get('ban').execute(message, Discord, embedColor, args);
    } else if (command == 'mute'){
        client.commands.get('mute').execute(message, args, Discord, embedColor, ms);
    } else if (command == 'warn'){
        client.commands.get('warn').execute(message, args, Discord, embedColor, ms);
    } else if (command == 'lockdown'){
        client.commands.get('lockdown').execute(message, args);
    }
});

// word filter
client.on('message', async message =>{
    client.commands.get('bannedWords').execute(message, Discord, client, embedColor, ms);
});

client.on('messageReactionAdd', async (reaction, user) => {  
    // starboard
    if (reaction.emoji.name === '💕'){
        client.commands.get('starboard').execute(reaction, Discord, client, embedColor);
    }

    // verification
    if (reaction.emoji.name === '🐝'){
        client.commands.get('verification').execute(reaction, user, client);
    }
});

client.on('messageReactionRemove', async (reaction, user) => {
    // starboard
    if (reaction.emoji.name === '<:hyena_laugh:738261600003424387>'){
        client.commands.get('starboard').execute(reaction, Discord, client, embedColor);
    }
});

client.login('NzM4MTc5MTYxOTYwNjExOTYw.XyII6g.S0CuwsEMZL_W3QjkQQ-wpRSoy9s'); // allows bot to be connected