module.exports = {
    name: 'warn',
    description: 'mutes member from talking',
    execute(message, args, Discord, embedColor, ms){
        if (message.member.roles.cache.has('738248181959229513') || message.member.roles.cache.has('739030988944048199')){
            const target = message.mentions.members.first();
            
            if (target) {
                const warning1 = message.guild.roles.cache.get('763407901456203856');
                const warning2 = message.guild.roles.cache.get('763408119005970472');
                const logChannel = message.guild.channels.cache.get('868197218258149396');
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
                    if (member.roles.cache.has('763408119005970472')) {
                        warnEmbed.setDescription(`This is <@${member.id}>'s third warning, kicking member in 30 seconds.`)
                        message.channel.send(warnEmbed);
                        const muteRole = message.guild.roles.cache.get('858962002626084904');
                        member.roles.add(muteRole);
                        setTimeout(function () {
                            member.kick();
                        }, ms("30s"));
                    }
    
                    // has 1 warning already
                    else if (member.roles.cache.has('763407901456203856')) {
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
                console.log(`warn - <@${target.id}>`);
                message.delete();
            } else {
                message.reply('you gotta mention a valid user.');
            }
        } else {
            message.reply('you don\'t have permission to use this command.');
        }
    }
}