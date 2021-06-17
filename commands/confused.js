module.exports = {
    name: 'confused',
    description: "you confused? same",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f1f48b')
        .setImage('https://i.imgur.com/EuwymaD.gif')

        message.channel.send(newEmbed);
    }
}