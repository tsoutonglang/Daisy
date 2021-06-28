module.exports = {
    name: 'bannedWords',
    description: "thou shall not speak these words",
    execute(message, Discord, client, embedColor) {
    let bannedWords = ['rape', 'rapist', 'raping', 'fag', 'faggot', 'chink', 'nigga', 'nigger', 'porn', 'pornography', 'retard', 'retarded'];
        if (message.channel.type === 'dm' || message.author.bot)
            return;
        
        const logChannel = client.channels.cache.find(channel => channel.id === '858954963899383808')
        let foundInText = false;
        for (var i in bannedWords){
            if (message.content.toLowerCase().includes(bannedWords[i].toLowerCase()))
                foundInText = true;
        }

        if (foundInText) {
            let logEmbed = new Discord.MessageEmbed()
                .setDescription(`<@${message.author.id}> said a banned word`)
                .addFields(
                    { name: "Channel", value: message.guild.channels.cache.get(message.channel.id).toString()},
                    { name: "Message", value: message.content}
                )
                .setColor(embedColor)
                .setTimestamp();
            logChannel.send(logEmbed);

            const warning1 = message.guild.roles.cache.get('858956889295552533');
            const warning2 = message.guild.roles.cache.get('858962059168317461');
            const mute = message.guild.roles.cache.get('858962002626084904');

            if (message.member.roles.cache.has(warning2)){
                console.log("yeet");
                let kickEmbed = new Discord.MessageEmbed()
                    .setDescription(`That word is not allowed here <@${message.author.id}>! You've recieved your third warning and you'll be kicked in one minute :3`)
                    .setColor(embedColor);
                message.channel.send(kickEmbed);
                message.delete();
                // kick member
            } else if (message.member.roles.cache.has(warning1)) {
                console.log("run");
                let warn2Embed = new Discord.MessageEmbed()
                    .setDescription(`That word is not allowed here <@${message.author.id}>! You've recieved your second warning and will be muted for 3 minutes.`)
                    .setColor(embedColor);
                message.channel.send(warn2Embed);
                message.delete();
                message.member.roles.add(warning2);
                message.member.roles.add(mute);
                setTimeout(async () => {
                    message.member.roles.remove(mute);
                }, 180000);
            } else {
                console.log("boss");
                let warn1Embed = new Discord.MessageEmbed()
                    .setDescription(`That word is not allowed here <@${message.author.id}>! You've recieved your first warning and will be muted for 3 minutes.`)
                    .setColor(embedColor);
                message.channel.send(warn1Embed);
                message.delete();
                message.member.roles.add(warning1);
                message.member.roles.add(mute);
                setTimeout(async () => {
                    message.member.roles.remove(mute);
                }, 180000);
            }
        }
    }
}