module.exports = {
    name: 'headpat',
    description: "give a headpat",
    execute(message, args, Discord, embedColor){
        let authorMember = message.member.displayName;

        const newEmbed = new Discord.MessageEmbed()
            .setColor(embedColor)
            .setDescription(`**${authorMember}** wants headpats`)
            .setImage('https://i.imgur.com/ESMFVPA.gif');

        if (message.mentions.members.first()){
            let targetMember = message.mentions.members.first().displayName;

            newEmbed.setDescription(`**${authorMember}** gave a headpat to **${targetMember}**`);
            newEmbed.setImage('https://i.imgur.com/pyMQqHV.gif');
        }

        message.channel.send(newEmbed);
    }
}