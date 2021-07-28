module.exports = {
    name: 'starboard',
    description: "to immortalize your failures",
    async execute(reaction, Discord, client, embedColor){
        const starboard = client.channels.cache.get('869300743541235792'); // channel
       
        const handleStarboard = async ()=> {
            const msgs = await starboard.messages.fetch({ limit: 100 });
            const fetchedMsg = await reaction.message.fetch();
            const image = fetchedMsg.attachments.size > 0 ? fetchedMsg.attachments.first().url : '';
            const existingMsg = msgs.find(msg =>
                msg.embeds.length === 1 ?
                (msg.embeds[0].footer.text.startsWith(reaction.message.id) ? true : false) : false);
            
            if (existingMsg) {
		console.log("message existed before");
                const embed = new Discord.MessageEmbed()
                    .setColor(embedColor)
                    .setAuthor(fetchedMsg.author.tag, fetchedMsg.author.displayAvatarURL())
                    .setDescription(fetchedMsg.cleanContent)
                    .addFields(
                        { name: '**Author**', value : `<@${fetchedMsg.author.id}>`, inline: true},
                        { name: '**Channel**', value : `${fetchedMsg.channel}`, inline: true},
                        { name: '**Original**', value : `[Message](${fetchedMsg.url})`},
                    )
                    .setFooter(fetchedMsg.id + ' | ' + new Date(fetchedMsg.createdTimestamp).toLocaleString())
                    .setImage(image);

                existingMsg.edit(`${reaction.count} - <:hyena_laugh:738261600003424387>`, embed);
            } else {
                console.log("message added to starboard");
                const embed = new Discord.MessageEmbed()
                    .setColor(embedColor)
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
                    starboard.send(`${reaction.count} - <:hyena_laugh:738261600003424387>`, embed);
            }
        }

        if (reaction.message.channel === starboard)
            return;
        
        if (reaction.message.partial) {
            console.log("message is partial");
            console.log("count: " + reaction.count);
            if (reaction.count >= 3){
                console.log("message eligible for starboard");
                handleStarboard();
	    }
        }
    }
}
