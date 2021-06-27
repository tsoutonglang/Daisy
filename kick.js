module.exports = {
    name: 'kick',
    description: "give a kick",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f1f48b')
        .setImage('https://i.imgur.com/qkrGmV7.gif')

        if (message.mentions.members.first()){
            let targetMember = message.mentions.members.first().displayName;
            let authorMember = message.member.displayName;

            newEmbed.setDescription(`**${authorMember}** kicked **${targetMember}**`)
        }

        message.channel.send(newEmbed);
    }  
}