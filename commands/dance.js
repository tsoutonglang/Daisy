module.exports = {
    name: 'dance',
    description: "dance party!!!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f1f48b')
        .setImage('https://i.imgur.com/iS7V8SN.gif')

        message.channel.send(newEmbed);
    }
}