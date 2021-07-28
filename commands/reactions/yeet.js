module.exports = {
    name: 'yeet',
    description: "yeet a bish",
    execute(message, Discord, embedColor){
        let authorMember = message.member.displayName;

        const newEmbed = new Discord.MessageEmbed()
            .setColor(embedColor)
            .setImage('https://i.imgur.com/u9EqLdq.gif')
            .setDescription(`**${authorMember}** yeeted someone`)

        if (message.mentions.members.first()){
            let targetMember = message.mentions.members.first().displayName;

            newEmbed.setDescription(`**${authorMember}** yeeted **${targetMember}**`)
        }

        message.channel.send(newEmbed);
    }
}