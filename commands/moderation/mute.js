module.exports = {
    name: 'mute',
    description: 'mutes member from talking',
    execute(message, args, Discord, embedColor, ms){
        if (message.member.roles.cache.has('738248181959229513') || message.member.roles.cache.has('739030988944048199')){
            const target = message.mentions.users.first();
            if (target) {
                const muteRole = message.guild.roles.cache.get('862089710737424464');
                const memberTarget = message.guild.members.cache.get(target.id);
                const verifyRole = message.guild.roles.cache.get('738601010116689953');

                let muteEmbed = new Discord.MessageEmbed()
                    .setDescription(`${memberTarget} has been muted indefinitely`)
                    .setColor(embedColor);
                
                if (!args[1]) {
                    memberTarget.roles.add(muteRole);
                    memberTarget.roles.remove(verifyRole);
                    console.log("member has been muted");
                    message.channel.send(muteEmbed);
                    return;
                }
                memberTarget.roles.add(muteRole);
                memberTarget.roles.remove(verifyRole);
                console.log("member has been muted");
                muteEmbed.setDescription(`${memberTarget} has been muted for ${ms(ms(args[1]))}`)
                message.channel.send(muteEmbed);

                setTimeout(function () {
                    memberTarget.roles.remove(muteRole);
                    memberTarget.roles.add(verifyRole);
                    console.log("muted time is up");
                }, (ms(args[1])));
            } else {
                message.reply('you gotta mention a valid user');
            }
        } else {
            message.reply('you don\'t have permission to use this command');
        }
    }
}