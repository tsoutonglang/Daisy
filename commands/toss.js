module.exports = {
    name: 'toss',
    description: "toss your enemies",
    execute(message, args, Discord){
        let authorMember = message.member.displayName;

        const newEmbed = new Discord.MessageEmbed()
            .setColor('#f1f48b')
            .setImage('https://i.imgur.com/u23AfOc.gif')
            .setDescription(`**${authorMember}** tossed someone`);

        if (message.mentions.members.first()){
            let targetMember = message.mentions.members.first().displayName;

            newEmbed.setDescription(`**${authorMember}** tossed **${targetMember}**`)
        }

        message.channel.send(newEmbed);
    }
}