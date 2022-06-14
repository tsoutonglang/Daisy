module.exports = {
    name: 'jail',
    description: 'gives members the jail time role',
    execute(message, args, Discord, embedColor, bbAdmin, bbMod, bbLog){
        if (message.member.roles.cache.has(bbAdmin) || message.member.roles.cache.has(bbMod)){
            const target = message.mentions.members.first();
            const jailRole = message.guild.roles.cache.get('767479238243778561');
            const verifyRole = message.guild.roles.cache.get('738601010116689953');
            var reason = " ";

            if (target) {
                if (!args[1]) {
                    reason = "Unspecified";
                } else {
                    reason = args.splice(1).join(" ");
                }

                const logChannel = message.guild.channels.cache.get(bbLog);
                let jailEmbed = new Discord.MessageEmbed()
                    .setDescription(`<@${target.id}> was put in jail.`)
                    .addField("Reason", reason)
                    .setColor(embedColor)
                    .setTimestamp();

                logChannel.send(jailEmbed);
                console.log(`jail - <@${target.id}>`);
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