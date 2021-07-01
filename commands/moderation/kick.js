module.exports = {
    name: 'kick',
    description: "kicks a member out",
    execute(message, Discord, embedColor){
        if (message.member.roles.cache.has('858950608933355530') || message.member.roles.cache.has('858950631736606720')){
            const member = message.mentions.users.first();
            if (member) {
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick();

                const kickEmbed = new Discord.MessageEmbed()
                    .setDescription(`${member.tag} has been kicked`)
                    .setColor(embedColor);
                
                message.channel.send(kickEmbed);
                message.delete();
            } else {
                // if member wasn't found or wasn't mentioned
                message.reply('you gotta mention a valid user');
            }
        } else {
            message.reply('you don\'t have permission to use this command');
        }
    }  
}