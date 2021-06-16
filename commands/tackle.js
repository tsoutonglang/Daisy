module.exports = {
    name: 'headpat',
    description: "give a headpat",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f1f48b')
        .setImage('https://i.imgur.com/3tTNoKu.gif')

        message.channel.send(newEmbed);
    }
}