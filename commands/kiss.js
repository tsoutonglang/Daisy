module.exports = {
    name: 'kiss',
    description: "give a kiss",
    execute(message, args, Discord, embedColor){
        let authorMember = message.member.displayName;
        
        const newEmbed = new Discord.MessageEmbed()
            .setColor(embedColor)
            .setDescription(`${authorMember} wants a kiss`)
            .setImage('https://i.imgur.com/Kh55TLR.gif');

        if (message.mentions.members.first()){
            let targetMember = message.mentions.members.first().displayName;

            newEmbed.setDescription(`**${authorMember}** kissed **${targetMember}**`);
            newEmbed.setImage('https://i.imgur.com/Gguy8R1.gif');
        }

        message.channel.send(newEmbed);
    }
}