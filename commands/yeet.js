module.exports = {
    name: 'yeet',
    description: "yeet a bish",
    execute(message, args, Discord){
        let authorMember = message.member.displayName;

        const newEmbed = new Discord.MessageEmbed()
            .setColor('#f1f48b')
            .setImage('https://i.imgur.com/u9EqLdq.gif')
            .setDescription(`**${authorMember}** yeeted someone`)

        if (message.mentions.members.first()){
            let targetMember = message.mentions.members.first().displayName;

            newEmbed.setDescription(`**${authorMember}** yeeted** **${targetMember}**`)
        }

        message.channel.send(newEmbed);
    }
}