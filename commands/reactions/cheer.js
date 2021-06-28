module.exports = {
    name: 'cheer',
    description: "cheer people on!",
    execute(message, Discord, embedColor){
        let authorMember = message.member.displayName;
        
        const newEmbed = new Discord.MessageEmbed()
            .setColor(embedColor)
            .setImage('https://i.imgur.com/lgRhGxw.gif')
            .setDescription(`**${authorMember}** is cheering you on!`)
        
        if (message.mentions.members.first()){
            let targetMember = message.mentions.members.first().displayName;

            newEmbed.setDescription(`**${authorMember}** is cheering on **${targetMember}**`);
        }
        
        message.channel.send(newEmbed);
    }
}