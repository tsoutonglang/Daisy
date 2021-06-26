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
    client.commands.get('welcome').execute(guildMember, Discord);
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
    const starboard = client.channels.cache.get('854967695455289344'); // channel
    
    if (reaction.emoji.name === '💕'){
        const handleStarboard = async ()=> {
            const msgs = await starboard.messages.fetch({ limit: 100 });
            const fetchedMsg = reaction.message;
            const image = fetchedMsg.attachments.size > 0 ? fetchedMsg.attachments.first().url : '';

            const existingMsg = msgs.find(msg =>
                msg.embeds.length === 1 ?
                (msg.embeds[0].footer.text.startsWith(reaction.message.id) ? true : false) : false);
                
            if (existingMsg) {
                const embed = new Discord.MessageEmbed()
                    .setColor('#f1f48b')
                    .setAuthor(fetchedMsg.author.tag, fetchedMsg.author.displayAvatarURL())
                    .setFooter(fetchedMsg.id + ' | ' + new Date(fetchedMsg.createdTimestamp).toLocaleString())
                    .setDescription(fetchedMsg.cleanContent)
                    .addFields(
                        { name: '**Author**', value : `<@${fetchedMsg.author.id}>`, inline: true},
                        { name: '**Channel**', value : `${fetchedMsg.channel}`, inline: true},
                        { name: '**Original**', value : `[Message](${fetchedMsg.url})`},
                    )
                    .setImage(image);

                existingMsg.edit(`${reaction.count} - 💕`, embed);
            } else{
                // send embed
                const embed = new Discord.MessageEmbed()
                    .setColor('#f1f48b')
                    .setAuthor(fetchedMsg.author.tag, fetchedMsg.author.displayAvatarURL())
                    .setDescription(fetchedMsg.cleanContent)
                    .addFields(
                        { name: '**Author**', value : `<@${fetchedMsg.author.id}>`, inline: true},
                        { name: '**Channel**', value : `${fetchedMsg.channel}`, inline: true},
                        { name: '**Original**', value : `[Message](${fetchedMsg.url})`},
                    )
                    .setFooter(fetchedMsg.id + ' | ' + new Date(fetchedMsg.createdTimestamp).toLocaleString())
                    .setImage(image);
                
                if(starboard)
                    starboard.send(`${reaction.count} - 💕`, embed);
            }
        }

        // checks if channel was starboard
        if (reaction.message.channel === starboard)
            return;
        
        // if there's correct number of reactions
        if (reaction.message.partial){
            await reaction.fetch();
            await reaction.message.fetch()
            if (reaction.count >= 2)
                handleStarboard();
        } else
            handleStarboard();
    }
});

client.on('messageReactionRemove', async (reaction, user) => {
    const starboard = client.channels.cache.get('854967695455289344'); // channel

    const handleStarboard = async ()=> {
        const msgs = await starboard.messages.fetch({ limit: 100 });
        const fetchedMsg = reaction.message;
        const image = fetchedMsg.attachments.size > 0 ? fetchedMsg.attachments.first().url : '';
        const existingMsg = msgs.find(msg =>
            msg.embeds.length === 1 ?
            (msg.embeds[0].footer.text.startsWith(reaction.message.id) ? true : false) : false);
        
        if (existingMsg) {
            const embed = new Discord.MessageEmbed()
                .setColor('#f1f48b')
                .setAuthor(fetchedMsg.author.tag, fetchedMsg.author.displayAvatarURL())
                .setDescription(fetchedMsg.cleanContent)
                .addFields(
                    { name: '**Author**', value : `<@${fetchedMsg.author.id}>`, inline: true},
                    { name: '**Channel**', value : `${fetchedMsg.channel}`, inline: true},
                    { name: '**Original**', value : `[Message](${fetchedMsg.url})`},
                )
                .setFooter(fetchedMsg.id + ' | ' + new Date(fetchedMsg.createdTimestamp).toLocaleString())
                .setImage(image);

            existingMsg.edit(`${reaction.count} - 💕`, embed);
        } else {
            const embed = new Discord.MessageEmbed()
                .setColor('#f1f48b')
                .setAuthor(fetchedMsg.author.tag, fetchedMsg.author.displayAvatarURL())
                .setDescription(fetchedMsg.cleanContent)
                .addFields(
                    { name: '**Author**', value : `<@${fetchedMsg.author.id}>`, inline: true},
                    { name: '**Channel**', value : `${fetchedMsg.channel}`, inline: true},
                    { name: '**Original**', value : `[Message](${fetchedMsg.url})`},
                )
                .setFooter(fetchedMsg.id + ' | ' + new Date(fetchedMsg.createdTimestamp).toLocaleString())
                .setImage(image);

            if (starboard)
                starboard.send(`${reaction.count} - 💕`, embed);
        }
    }

    if (reaction.message.channel === starboard)
        return;
    
        if (reaction.message.partial) {
            await reaction.fetch();
            await reaction.message.fetch();
            handleStarboard();
        }
        else
            handleStarboard();
});

client.login('NzM4MTc5MTYxOTYwNjExOTYw.XyII6g.S0CuwsEMZL_W3QjkQQ-wpRSoy9s'); // allows bot to be connected