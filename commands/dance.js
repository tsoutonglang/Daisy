module.exports = {
    name: 'dance',
    description: "dance party!!!",
    execute(message, args, Discord, embedColor){
        let authorMember = message.member.displayName;

        const newEmbed = new Discord.MessageEmbed()
            .setColor(embedColor)
            .setImage('https://i.imgur.com/iS7V8SN.gif')
            .setDescription(`**${authorMember}** is dancing!`)

        if (message.mentions.members.first()){
            let targetMember = message.mentions.members.first().displayName;

            newEmbed.setDescription(`**${authorMember}** is dancing with **${targetMember}**`);
        }

        message.channel.send(newEmbed);
    }
}