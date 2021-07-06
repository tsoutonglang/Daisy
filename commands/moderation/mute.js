module.exports = {
    name: 'mute',
    description: 'mutes member from talking',
    execute(message, args, Discord, embedColor, ms){
        if (message.member.roles.cache.has('738248181959229513') || message.member.roles.cache.has('739030988944048199')){
            const target = message.mentions.users.first();
            if (target) {
                const muteRole = message.guild.roles.cache.get('858962002626084904');
                const memberTarget = message.guild.members.cache.get(target.id);
                
                if (!args[1]) {
                    memberTarget.roles.add(muteRole.id);
                    let muteEmbed = new Discord.MessageEmbed()
                        .setDescription(`${memberTarget} has been muted indefinitely`)
                        .setColor(embedColor);
                    message.delete();
                    message.channel.send(muteEmbed);
                    return;
                }
                memberTarget.roles.add(muteRole.id);
                let muteEmbed = new Discord.MessageEmbed()
                    .setDescription(`${memberTarget} has been muted for ${ms(ms(args[1]))}`)
                    .setColor(embedColor);
                message.delete();
                message.channel.send(muteEmbed);

                setTimeout(function () {
                    memberTarget.roles.remove(muteRole.id);
                }, (ms(args[1])));
            } else {
                message.reply('you gotta mention a valid user');
            }
        } else {
            message.reply('you don\'t have permission to use this command');
        }
    }
}