module.exports = {
    name: 'blush',
    description: "start blushing",
    execute(message, args, Discord, embedColor){
        let authorMember = message.member.displayName;

        const newEmbed = new Discord.MessageEmbed()
            .setColor(embedColor)
            .setImage('https://i.imgur.com/egsoAY0.gif')
            .setDescription(`**${authorMember}** is blushing`);
        
        if (message.mentions.members.first()){
            let targetMember = message.mentions.members.first().displayName;
                
            newEmbed.setDescription(`**${authorMember}** is blushing because of **${targetMember}**`);
        }

        message.channel.send(newEmbed);
    }  
}