module.exports = {
    name: 'birthday',
    description: "birthday celebration !!!",
    execute(message, Discord, embedColor){
        let authorMember = message.member.displayName;

        const newEmbed = new Discord.MessageEmbed()
            .setColor(embedColor)
            .setImage('https://i.imgur.com/rjke4Ov.gif')
            .setDescription(`**${authorMember}** is celebrating your birthday!`);
        
        if (message.mentions.members.first()){
            let targetMember = message.mentions.members.first().displayName;
                
            newEmbed.setDescription(`**${authorMember}** is celebrating **${targetMember}**'s birthday!`);
        }

        message.channel.send(newEmbed);
    }  
}