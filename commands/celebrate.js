module.exports = {
    name: 'celebrate',
    description: "start celebrating",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f1f48b')
        .setImage('https://i.imgur.com/mwG8gqn.gif')

        message.channel.send(newEmbed);
    }
}