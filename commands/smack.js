module.exports = {
    name: 'smack',
    description: "smack a bish",
    execute(message, args, Discord){
        let authorMember = message.member.displayName;

        const newEmbed = new Discord.MessageEmbed()
            .setColor('#f1f48b')
            .setImage('https://i.imgur.com/4h5uMFD.gif')
            .setDescription(`**${authorMember}** smacked someone`);

        if (message.mentions.members.first()){
            let targetMember = message.mentions.members.first().displayName;

            newEmbed.setDescription(`**${authorMember}** smacked **${targetMember}**`)
        }

        message.channel.send(newEmbed);
    }
}