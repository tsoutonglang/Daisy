module.exports = {
    name: 'celebrate',
    description: "start celebrating",
    execute(message, args, Discord){
        let authorMember = message.member.displayName;

        const newEmbed = new Discord.MessageEmbed()
            .setColor('#f1f48b')
            .setImage('https://i.imgur.com/mwG8gqn.gif')
            .setDescription(`**${authorMember}** is celebrating!`)

        if (message.mentions.members.first()){
            let targetMember = message.mentions.members.first().displayName;
            
            newEmbed.setDescription(`**${authorMember}** is celebrating for **${targetMember}**`);
        }
            
        message.channel.send(newEmbed);
    }
}