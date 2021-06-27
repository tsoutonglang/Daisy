module.exports = {
    name: 'cuddle',
    description: "cuddle someone",
    execute(message, args, Discord, embedColor){
        let authorMember = message.member.displayName;

        const newEmbed = new Discord.MessageEmbed()
            .setColor(embedColor)
            .setImage('https://i.imgur.com/BnQNkax.gif')
            .setDescription(`**${authorMember}** wants cuddles`)
        
        if (message.mentions.members.first()){
            let targetMember = message.mentions.members.first().displayName;

            newEmbed.setDescription(`**${authorMember}** is cuddling **${targetMember}**`);
            newEmbed.setImage('https://i.imgur.com/xXdpCuB.gif');
        }
        
        message.channel.send(newEmbed);
    }
}