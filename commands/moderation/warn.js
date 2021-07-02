module.exports = {
    name: 'warn',
    description: 'mutes member from talking',
    execute(message, args, Discord, embedColor, ms, client){
        if (message.member.roles.cache.has('858950608933355530') || message.member.roles.cache.has('858950631736606720')){
            const target = message.mentions.users.first();            
            
            if (target) {
                const warning1 = message.guild.roles.cache.get('858956889295552533');
                const warning2 = message.guild.roles.cache.get('858962059168317461');

                if (!args[1]) {
                    message.channel.send("you need to give a reason");
                    return;
                }
                
                const reason = args.splice(1).join(" ");

                let warnEmbed = new Discord.MessageEmbed()
                    .setDescription(`<@${target.id}> has been given a warning`)
                    .addField("Reason", reason)
                    .setColor(embedColor)
                    .setTimestamp();

                const logChannel = client.channels.cache.get('858954963899383808')
                
                logChannel.send(warnEmbed);
                message.channel.send(warnEmbed);
                message.delete();
            } else {
                message.reply('you gotta mention a valid user');
            }
        } else {
            message.reply('you don\'t have permission to use this command');
        }
    }
}