module.exports = {
    name: 'comfort',
    description: "give a headpat",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f1f48b')
        .setImage('https://i.imgur.com/xXdpCuB.gif')

        message.channel.send(newEmbed);
    }
}