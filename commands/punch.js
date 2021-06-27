module.exports = {
    name: 'punch',
    description: "punch a bish",
    execute(message, args, Discord){
        let authorMember = message.member.displayName;

        const newEmbed = new Discord.MessageEmbed()
            .setColor('#f1f48b')
            .setImage('https://i.imgur.com/zmjyMj3.gif')
            .setDescription(`**${authorMember}** punched someone`)

        if (message.mentions.members.first()){
            let targetMember = message.mentions.members.first().displayName;

            newEmbed.setDescription(`**${authorMember}** punched **${targetMember}**`)
        }

        message.channel.send(newEmbed);
    }
}