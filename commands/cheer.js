module.exports = {
    name: 'cheer',
    description: "cheer people on!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f1f48b')
        .setImage('https://i.imgur.com/lgRhGxw.gif')

        message.channel.send(newEmbed);
    }
}