module.exports = {
    name: 'reactionrole',
    description: "sets up a reaction role message",
    async execute (message, args, Discord, client){
        // const channel = '738288684725436516'; // baebee role channel
        const channel = '855163582152966204'; // moon role channel

        // pronoun roles
        const sheherRole = message.guild.roles.cache.get('855163476325433434');
        const sheherEmoji = '855169071183822868';
        const hehimRole = message.guild.roles.cache.get('855163514851295292');
        const hehimEmoji = '855169071141748756';

        // creates embed message
        let embed = new Discord.MessageEmbed()
            .setColor('#f1f48b')
            .setTitle('pronouns')
            .setDescription('\n˚₊✩‧₊ ━━━━━━━━━━━━━━━━₊‧✩₊˚\n\n'
                + `<:dashRed:855169071183822868>  <@&855163476325433434>\n`
                + `<:dashPeach:855169071141748756>  <@&855163514851295292>\n\n`
                + `˚₊✩‧₊ ━━━━━━━━━━━━━━━━₊‧✩₊˚`);
    
        let messageEmbed = await message.channel.send(embed); // tells bot to wait for message to be sent before reacting
        // bot react with emojis
        messageEmbed.react(sheherEmoji);
        messageEmbed.react(hehimEmoji);

        // add roles when user reacts
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            // checks if reaction is happening inside the channel
            if (reaction.message.channel.id == channel){
                // connects emoji to role
                if (reaction.emoji.id === sheherEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(sheherRole);
                    console.log('role added');
                }
                if (reaction.emoji.id === hehimEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(hehimRole);
                    console.log('role added');
                }
            } else {
                return;
            }
        });

        // remove role when reacting again
        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            // checks if reaction is happening inside the channel
            if (reaction.message.channel.id == channel){
                // connects emoji to role
                if (reaction.emoji.id === sheherEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(sheherRole);
                    console.log('role removed');
                }
                if (reaction.emoji.id === hehimEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(hehimRole);
                    console.log('role removed');
                }
            } else {
                  return;
            }
        });
    }
}