module.exports = {
    name: 'ban',
    description: 'ban member from server',
    execute(message, Discord, embedColor, args){
        if (message.member.roles.cache.has('858950608933355530') || message.member.roles.cache.has('858950631736606720')){
            const member = message.mentions.users.first();
            if (member) {
                const memberTarget = message.guild.members.cache.get(member.id);
                const logChannel = message.guild.channels.cache.get('858954963899383808');
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