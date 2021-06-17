module.exports = {
    name: 'toss',
    description: "toss your enemies",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f1f48b')
        .setImage('https://i.imgur.com/u23AfOc.gif')

        message.channel.send(newEmbed);
    }
}