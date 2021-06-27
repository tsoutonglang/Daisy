const Discord = require('discord.js');

const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const prefix = 'd.'; // prefix to use commands

client.once('ready', () => {
    console.log('Daisy is online');
});

const fs = require('fs'); // to get into other js files

client.commands = new Discord.Collection(); //compile all the files

// go into commands folder
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

const embedColor = '#f1f48b';

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
        client.commands.get('help').execute(message, args, Discord, embedColor);
    }

    // reaction commands
    else if(command === 'headpat'){
        client.commands.get('headpat').execute(message, args, Discord, embedColor);
    } else if (command == 'hug'){
        client.commands.get('hug').execute(message, args, Discord, embedColor);
    } else if (command == 'kick'){
        client.commands.get('kick').execute(message, args, Discord, embedColor);
    } else if (command == 'blush'){
        client.commands.get('blush').execute(message, args, Discord, embedColor);
    } else if (command == 'celebrate'){
        client.commands.get('celebrate').execute(message, args, Discord, embedColor);
    } else if (command == 'cheer'){
        client.commands.get('cheer').execute(message, args, Discord, embedColor);
    } else if (command == 'confused'){
        client.commands.get('confused').execute(message, args, Discord, embedColor);
    } else if (command == 'cry'){
        client.commands.get('cry').execute(message, args, Discord, embedColor);
    } else if (command == 'cuddle'){
        client.commands.get('cuddle').execute(message, args, Discord, embedColor);
    } else if (command == 'dance'){
        client.commands.get('dance').execute(message, args, Discord, embedColor);
    } else if (command == 'kiss'){
        client.commands.get('kiss').execute(message, args, Discord, embedColor);
    } else if (command == 'punch'){
        client.commands.get('punch').execute(message, args, Discord, embedColor);
    } else if (command == 'sleep'){
        client.commands.get('sleep').execute(message, args, Discord, embedColor);
    } else if (command == 'smack'){
        client.commands.get('smack').execute(message, args, Discord, embedColor);
    } else if (command == 'tackle'){
        client.commands.get('tackle').execute(message, args, Discord, embedColor);
    } else if (command == 'toss'){
        client.commands.get('toss').execute(message, args, Discord, embedColor);
    } else if (command == 'yeet'){
        client.commands.get('yeet').execute(message, args, Discord, embedColor);
    } 

    // reaction role
    else if (command === 'reactionrole'){
        client.commands.get('reactionrole').execute(message, args, Discord, client, embedColor);
    }

    // rules channel
    else if (command === 'rules'){
        client.commands.get('rules').execute(message, args);
    }
});

client.on('messageReactionAdd', async (reaction, user) => {  
    // starboard
    if (reaction.emoji.name === '<:hyena_laugh:738261600003424387>'){
        client.commands.get('starboard').execute(reaction, user, Discord, client, embedColor);
    }

    // verification
    if (reaction.emoji.name === '🐝'){
        client.commands.get('verification').execute(reaction, user, client);
    }
});

client.on('messageReactionRemove', async (reaction, user) => {
    // starboard
    if (reaction.emoji.name === '<:hyena_laugh:738261600003424387>'){
        client.commands.get('starboard').execute(reaction, user, Discord, client, embedColor);
    }
});

client.login('NzM4MTc5MTYxOTYwNjExOTYw.XyII6g.S0CuwsEMZL_W3QjkQQ-wpRSoy9s'); // allows bot to be connected