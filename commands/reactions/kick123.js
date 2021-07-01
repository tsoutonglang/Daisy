module.exports = {
    name: 'kick123',
    description: "give a kick",
    execute(message, Discord, embedColor){
        let authorMember = message.member.displayName;

        const newEmbed = new Discord.MessageEmbed()
        .setColor(embedColor)
        .setImage('https://i.imgur.com/qkrGmV7.gif')
        .setDescription(`**${authorMember}** kicked someone`);

        if (message.mentions.members.first()){
            let targetMember = message.mentions.members.first().displayName;

            newEmbed.setDescription(`**${authorMember}** kicked **${targetMember}**`)
        }

        message.channel.send(newEmbed);
    }  
}