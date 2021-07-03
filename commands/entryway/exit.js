module.exports = {
    name: 'exit',
    description: "for when people leave",
    execute(guildMember, Discord){
        const baebee = '738238370488254534';

        if (guildMember.guild.id === baebee) {
            const channel = guildMember.guild.channels.cache.get('738306568675786803');
            channel.send(`${guildMember.user.tag} has left the hive 😔💕`);
        } else { // daisy
            const channel = guildMember.guild.channels.cache.get('860807980970672148');
            channel.send(`${guildMember.user.tag} has left the hive 😔💕`);
        }
    }
}