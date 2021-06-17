module.exports = {
    name: 'smack',
    description: "smack a bish",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f1f48b')
        .setImage('https://i.imgur.com/4h5uMFD.gif')

        message.channel.send(newEmbed);
    }
}