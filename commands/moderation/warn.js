module.exports = {
    name: 'warn',
    description: 'mutes member from talking',
    execute(message, args, Discord, embedColor, ms){
        if (message.member.roles.cache.has('858950608933355530') || message.member.roles.cache.has('858950631736606720')){
            const target = message.mentions.members.first();
            
            if (target) {
                const warning1 = message.guild.roles.cache.get('858956889295552533');
                const warning2 = message.guild.roles.cache.get('858962059168317461');
                const logChannel = message.guild.channels.cache.get('858954963899383808');
                var reason = " ";

                if (!args[1]) {
                    reason = "Unspecified";
                } else {
                    reason = args.splice(1).join(" ");
                }
                
                let warnEmbed = new Discord.MessageEmbed()
                    .setDescription(`<@${target.id}> has been given a warning.`)
                    .addField("Reason", reason)
                    .setColor(embedColor)
                    .setTimestamp();

                function warningSystem(member) {
                    // has 2 warnings already
                    if (member.roles.cache.has('858962059168317461')) {
                        warnEmbed.setDescription(`This is <@${member.id}>'s third warning, kicking member in 30 seconds.`)
                        message.channel.send(warnEmbed);
                        setTimeout(function () {
                            member.kick();
                        }, ms("30s"));
                    }
    
                    // has 1 warning already
                    else if (member.roles.cache.has('858956889295552533')) {
                        message.channel.send(warnEmbed);
                        member.roles.add(warning2);
                    }
    
                    // had no warnings
                    else {
                        message.channel.send(warnEmbed);
                        member.roles.add(warning1);
                    }
                }

                warningSystem(target);
                logChannel.send(warnEmbed);
                message.delete();
            } else {
                message.reply('you gotta mention a valid user.');
            }
        } else {
            message.reply('you don\'t have permission to use this command.');
        }
    }
}