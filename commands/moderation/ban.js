module.exports = {
    name: 'ban',
    description: 'ban member from server',
    execute(message, Discord, embedColor, args, bbAdmin, bbMod, bbLog){
        if (message.member.roles.cache.has(bbAdmin) || message.member.roles.cache.has(bbMod)){
            const member = message.mentions.users.first();
            if (member) {
                const memberTarget = message.guild.members.cache.get(member.id);
                const logChannel = message.guild.channels.cache.get(bbLog);
                var reason = " ";

                if (!args[1]) {
                    reason = "Unspecified";
                } else {
                    reason = args.splice(1).join(" ");
                }

                memberTarget.ban();

                const banEmbed = new Discord.MessageEmbed()
                    .setDescription(`<@${member.id}> has been banned.`)
                    .addField("Reason", reason)
                    .setColor(embedColor)
                    .setTimestamp();
                
                logChannel.send(banEmbed);
                console.log(`ban - <@${target.id}>`);
                message.channel.send(banEmbed);
                message.delete();
            } else {
                // if member wasn't found or wasn't mentioned
                message.reply('you gotta mention a valid user.');
            }
        } else {
            message.reply('you don\'t have permission to use this command.');
        }
    }
}