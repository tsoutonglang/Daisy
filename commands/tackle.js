module.exports = {
    name: 'tackle',
    description: "tackle your friends",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f1f48b')
        .setImage('https://i.imgur.com/3tTNoKu.gif')

        message.channel.send(newEmbed);
    }
}