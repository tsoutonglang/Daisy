module.exports = {
    name: 'tackle',
    description: "tackle your friends",
    execute(message, args, Discord){
        let authorMember = message.member.displayName;

        const newEmbed = new Discord.MessageEmbed()
            .setColor('#f1f48b')
            .setImage('https://i.imgur.com/3tTNoKu.gif')
            .setDescription(`**${authorMember}** tackled someone`);

        if (message.mentions.members.first()){
            let targetMember = message.mentions.members.first().displayName;
            let authorMember = message.member.displayName;

            newEmbed.setDescription(`**${authorMember}** tackled **${targetMember}**`)
        }

        message.channel.send(newEmbed);
    }
}