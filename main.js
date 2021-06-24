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

client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.get('744230534456017029');
    console.log('User ' + guildMember.user.tag + 'has joined');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('738312747250614333').send(`<@${guildMember.user.id}> has landed!`);
});

client.on('guildMemberRemove', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.get('744230534456017029');
    console.log('User ' + guildMember.user.tag + 'has left');
    
    guildMember.guild.channels.cache.get('738312747250614333').send(`${guildMember.user.tag} got dusted!`);
});

// commands
client.on('message', message => {
    // check if command started with prefix
    if(!message.content.startsWith(prefix) || message.author.bot) return; // not with prefix

    const args = message.content.slice(prefix.length).split(/ +/); // with prefix
    const command = args.shift().toLowerCase();

    // help
    if(command === 'help'){
        client.commands.get('help').execute(message, args, Discord);
    }

    // reaction commands
    else if(command === 'headpat'){
        client.commands.get('headpat').execute(message, args, Discord);
    } else if (command == 'hug'){
        client.commands.get('hug').execute(message, args, Discord);
    } else if (command == 'kick'){
        client.commands.get('kick').execute(message, args, Discord);
    } else if (command == 'blush'){
        client.commands.get('blush').execute(message, args, Discord);
    } else if (command == 'celebrate'){
        client.commands.get('celebrate').execute(message, args, Discord);
    } else if (command == 'cheer'){
        client.commands.get('cheer').execute(message, args, Discord);
    } else if (command == 'confused'){
        client.commands.get('confused').execute(message, args, Discord);
    } else if (command == 'cry'){
        client.commands.get('cry').execute(message, args, Discord);
    } else if (command == 'comfort'){
        client.commands.get('comfort').execute(message, args, Discord);
    } else if (command == 'dance'){
        client.commands.get('dance').execute(message, args, Discord);
    } else if (command == 'kiss'){
        client.commands.get('kiss').execute(message, args, Discord);
    } else if (command == 'punch'){
        client.commands.get('punch').execute(message, args, Discord);
    } else if (command == 'sleep'){
        client.commands.get('sleep').execute(message, args, Discord);
    } else if (command == 'smack'){
        client.commands.get('smack').execute(message, args, Discord);
    } else if (command == 'tackle'){
        client.commands.get('tackle').execute(message, args, Discord);
    } else if (command == 'toss'){
        client.commands.get('toss').execute(message, args, Discord);
    } else if (command == 'yeet'){
        client.commands.get('yeet').execute(message, args, Discord);
    } 

    // reaction role
    else if (command === 'reactionrole'){
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    }
});

// starboard
client.on('messageReactionAdd', async (reaction, user) => {
    // check if reaction emoji is correct
    if (reaction.emoji.name === '💕'){
        // create starboard message
       if (reaction.message.partial){
           const starboard = client.channels.cache.get('857183207992852508');
           const fetchedMsg = await reaction.message.fetch();
           const sbEmbed = new Discord.MessageEmbed()
           .setColor('#f1f48b')
           .setAuthor(fetchedMsg.author.tag, fetchedMsg.author.displayAvatarURL())
           .setDescription(`[Jump to message](${fetchedMsg.url})\n\n` + fetchedMsg.content)
           // .setImage(fetchedMsg.url)
           .setFooter(fetchedMsg.id + ' | ' + new Date(fetchedMsg.createdTimestamp).toLocaleString())
           if (starboard) {
               starboard.send(sbEmbed);
           }
       }
       else{
           return
       }
   }  
});

client.login('NzM4MTc5MTYxOTYwNjExOTYw.XyII6g.S0CuwsEMZL_W3QjkQQ-wpRSoy9s'); // allows bot to be connected