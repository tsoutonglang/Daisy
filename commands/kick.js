module.exports = {
    name: 'kick',
    description: "give a kick",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f1f48b')
        .setImage('https://i.imgur.com/qkrGmV7.gif')

        message.channel.send(newEmbed);
    }  
}