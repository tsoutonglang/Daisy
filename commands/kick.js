module.exports = {
    name: 'kick',
    description: "give a kick",
    execute(message, args, Discord){
        let authorMember = message.member.displayName;

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f1f48b')
        .setImage('https://i.imgur.com/qkrGmV7.gif')
        .setDescription(`**${authorMember}** kicked someone`);

        if (message.mentions.members.first()){
            let targetMember = message.mentions.members.first().displayName;

            newEmbed.setDescription(`**${authorMember}** kicked **${targetMember}**`)
        }

        message.channel.send(newEmbed);
    }  
}