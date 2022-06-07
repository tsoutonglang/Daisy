module.exports = {
    name: 'exit',
    description: "for when people leave",
    execute(guildMember, Discord){
        const baebee = '738238370488254534';
        const daisy = '855168901267456060';
        const moon = '738144225966817331';

        if (guildMember.guild.id === baebee) {
            const channel = guildMember.guild.channels.cache.get('738306568675786803');
            channel.send(`${guildMember.user.tag} has left the hive 😔💕`);
        } else if (guildMember.guild.id === daisy) {
            const channel = guildMember.guild.channels.cache.get('858424513238532149');
            channel.send(`${guildMember.user.tag} has been dusted`);
        } else if (guildMember.guild.id === moon) {
            const channel = guildMember.guild.channels.cache.get('983217110761209906');
            channel.send(`${guildMember.user.tag} has been dusted`);
        }
    }
}