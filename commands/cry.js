module.exports = {
    name: 'cry',
    description: "i like it when you cry",
    execute(message, args, Discord){
        let authorMember = message.member.displayName;

        const newEmbed = new Discord.MessageEmbed()
            .setColor('#f1f48b')
            .setImage('https://i.imgur.com/4plJtVG.gif')
            .setDescription(`**${authorMember}** is crying`);

        if (message.mentions.members.first()){
            let targetMember = message.mentions.members.first().displayName;

            newEmbed.setDescription(`**${authorMember}** is crying because of **${targetMember}**`);
        }

        message.channel.send(newEmbed);
    }
}