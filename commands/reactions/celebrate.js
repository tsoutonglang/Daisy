module.exports = {
    name: 'celebrate',
    description: "start celebrating",
    execute(message, Discord, embedColor){
        let authorMember = message.member.displayName;

        const newEmbed = new Discord.MessageEmbed()
            .setColor(embedColor)
            .setImage('https://i.imgur.com/mwG8gqn.gif')
            .setDescription(`**${authorMember}** is celebrating!`)

        if (message.mentions.members.first()){
            let targetMember = message.mentions.members.first().displayName;
            
            newEmbed.setDescription(`**${authorMember}** is celebrating for **${targetMember}**`);
        }
            
        message.channel.send(newEmbed);
    }
}