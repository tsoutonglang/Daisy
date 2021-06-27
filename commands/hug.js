module.exports = {
    name: 'hug',
    description: "give a hug",
    execute(message, args, Discord, embedColor){
        let authorMember = message.member.displayName;

        const newEmbed = new Discord.MessageEmbed()
            .setColor(embedColor)
            .setDescription(`**${authorMember} wants a hug`)
            .setImage('https://i.imgur.com/0e3POQ6.gif');

        if (message.mentions.members.first()){
            let targetMember = message.mentions.members.first().displayName;

            newEmbed.setDescription(`**${authorMember}** is hugging **${targetMember}**`);
            newEmbed.setImage('https://i.imgur.com/8RynXDI.gif');
        }

        message.channel.send(newEmbed);
    }  
}