module.exports = {
    name: 'kick',
    description: "kicks a member out",
    execute(message, Discord, embedColor, args){
        if (message.member.roles.cache.has('738248181959229513') || message.member.roles.cache.has('739030988944048199')){
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
                
                memberTarget.kick();

                const kickEmbed = new Discord.MessageEmbed()
                    .setDescription(`<@${member.id}> has been kicked.`)
                    .addField("Reason", reason)
                    .setColor(embedColor)
                    .setTimestamp();
                
                logChannel.send(kickEmbed);
                message.channel.send(kickEmbed);
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