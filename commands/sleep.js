module.exports = {
    name: 'sleep',
    description: "go to sleep",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f1f48b')
        .setImage('https://i.imgur.com/DAYqWuN.gif')

        message.channel.send(newEmbed);
    }
}