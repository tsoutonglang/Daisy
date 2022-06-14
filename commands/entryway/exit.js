module.exports = {
    name: 'exit',
    description: "for when people leave",
    execute(guildMember, Discord, embedColor, bbGuild, daisyGuild){

        if (guildMember.guild.id === bbGuild) {
            const channel = guildMember.guild.channels.cache.get('738306568675786803');
            // channel.send(`${guildMember.user.tag} has left the hive 😔💕`);
            const exitMsg = new Discord.MessageEmbed()
                .setColor(embedColor)
                .setTitle("Traffic Report")
                .setDescription(`${guildMember.user.tag} has left the hive`)
                .setImage('https://i.imgur.com/QEgHe3Y.gif')
                .setFooter("Visit again soon!", "https://i.imgur.com/PmRwT69.png");
            channel.send({embed: exitMsg});
        
        } else if (guildMember.guild.id === daisyGuild) {
            const channel = guildMember.guild.channels.cache.get('858424513238532149');
            channel.send(`${guildMember.user.tag} has been dusted`);
        }
    }
}