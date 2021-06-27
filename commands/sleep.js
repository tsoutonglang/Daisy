module.exports = {
    name: 'sleep',
    description: "go to sleep",
    execute(message, args, Discord){
        let authorMember = message.member.displayName;

        const newEmbed = new Discord.MessageEmbed()
            .setColor('#f1f48b')
            .setImage('https://i.imgur.com/DAYqWuN.gif')
            .setDescription(`**${authorMember}** says go to sleep`);

        if (message.mentions.members.first()){
            let targetMember = message.mentions.members.first().displayName;

            newEmbed.setDescription(`**${authorMember}** is telling **${targetMember}** to go to sleep`)
        }

        message.channel.send(newEmbed);
    }
}