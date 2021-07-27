module.exports = {
    name: 'jail',
    description: 'gives members the jail time role',
    execute(message, args, Discord, embedColor){
        if (message.member.roles.cache.has('738248181959229513') || message.member.roles.cache.has('739030988944048199')){
            const target = message.mentions.members.first();
            const jailRole = message.guild.roles.cache.get('767479238243778561');
            const verifyRole = message.guild.roles.cache.get('738601010116689953');
            
            if (target) {
                const logChannel = message.guild.channels.cache.get('868197218258149396');

                let jailEmbed = new Discord.MessageEmbed()
                    .setDescription(`<@${target.id}> was put in jail.`)
                    .setColor(embedColor)
                    .setTimestamp();

                logChannel.send(jailEmbed);
                target.roles.add(jailRole);
                target.roles.remove(verifyRole);
            } else {
                message.reply('you gotta mention a valid user.');
            }
        } else {
            message.reply('you don\'t have permission to use this command.');
        }
    }
}