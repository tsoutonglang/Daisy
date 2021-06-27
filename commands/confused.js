module.exports = {
    name: 'confused',
    description: "you confused? same",
    execute(message, args, Discord, embedColor){
        let authorMember = message.member.displayName;

        const newEmbed = new Discord.MessageEmbed()
            .setColor(embedColor)
            .setImage('https://i.imgur.com/EuwymaD.gif')
            .setDescription(`**${authorMember}** is confused`)

        if (message.mentions.members.first()){
            let targetMember = message.mentions.members.first().displayName;

            newEmbed.setDescription(`**${authorMember}** got confused by **${targetMember}**`);
        }

        message.channel.send(newEmbed);
    }
}