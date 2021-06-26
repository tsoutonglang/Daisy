module.exports = {
    name: 'starboard',
    description: "to immortalize your failures",
    async execute(reaction, user, Discord, client){
        
        const starboard = client.channels.cache.get('858422996893302785'); // channel
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
    }
}