module.exports = {
    name: 'exit',
    description: "for when people leave",
    execute(guildMember, Discord){

        if (guildMember.guild.id === '738238370488254534') { // A&A
            const channel = guildMember.guild.channels.cache.get('738306568675786803');
            // channel.send(`${guildMember.user.tag} has left the hive 😔💕`);
            const exitMsg = new Discord.MessageEmbed()
                .setColor('#f1f48b')
                .setTitle("Traffic Report")
                .setDescription(`${guildMember.user.tag} has left the hive`)
                .setImage('https://i.imgur.com/QEgHe3Y.gif')
                .setFooter("Visit again soon!", "https://i.imgur.com/PmRwT69.png");
            channel.send(`<a:bee:858626567608729651> <@${guildMember.user.id}> <a:bee:858626567608729651>\n`, {embed: welcomeMsg});
        
        } else if (guildMember.guild.id === '855168901267456060') { // Daisy
            const channel = guildMember.guild.channels.cache.get('858424513238532149');
            channel.send(`${guildMember.user.tag} has been dusted`);
        }
    }
}