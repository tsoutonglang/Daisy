module.exports = {
    name: 'exit',
    description: "for when people leave",
    execute(guildMember, Discord){
        const channel = guildMember.guild.channels.cache.get('738306568675786803');
        channel.send(`${guildMember.user.tag} has left the hive 😔💕`);
    }
}