module.exports = {
    name: 'hug',
    description: "give a hug",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f1f48b')
        .setImage('https://i.imgur.com/8RynXDI.gif')

        message.channel.send(newEmbed);
    }  
}