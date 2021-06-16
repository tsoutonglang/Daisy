module.exports = {
    name: 'kiss',
    description: "give a kiss",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f1f48b')
        .setImage('https://i.imgur.com/Gguy8R1.gif')

        message.channel.send(newEmbed);
    }
}