module.exports = {
    name: 'sleep',
    description: "go to sleep",
    execute(message, Discord, embedColor){
        let authorMember = message.member.displayName;

        const newEmbed = new Discord.MessageEmbed()
            .setColor(embedColor)
            .setImage('https://i.imgur.com/DAYqWuN.gif')
            .setDescription(`**${authorMember}** says go to sleep`);

        if (message.mentions.members.first()){
            let targetMember = message.mentions.members.first().displayName;

            newEmbed.setDescription(`**${authorMember}** is telling **${targetMember}** to go to sleep`)
        }

        message.channel.send(newEmbed);
    }
}