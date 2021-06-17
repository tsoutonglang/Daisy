module.exports = {
    name: 'yeet',
    description: "yeet a bish",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f1f48b')
        .setImage('https://i.imgur.com/u9EqLdq.gif')

        message.channel.send(newEmbed);
    }
}