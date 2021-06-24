module.exports = {
    name: 'blush',
    description: "start blushing",
    execute(message, args, Discord){
        if (message.mentions.members.first()){
            let targetMember = message.mentions.members.first().displayName;
            let authorMember = message.member.displayName;

            const newEmbed = new Discord.MessageEmbed()
            .setColor('#f1f48b')
            .setDescription(`**${authorMember}** is blushing because of **${targetMember}**`)
            .setImage('https://i.imgur.com/egsoAY0.gif')

            message.channel.send(newEmbed);
        } else {
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#f1f48b')
            .setImage('https://i.imgur.com/egsoAY0.gif')

            message.channel.send(newEmbed);
        }
    }  
}