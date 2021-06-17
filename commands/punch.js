module.exports = {
    name: 'punch',
    description: "punch a bish",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f1f48b')
        .setImage('https://i.imgur.com/zmjyMj3.gif')

        message.channel.send(newEmbed);
    }
}