module.exports = {
    name: 'blush',
    description: "start blushing",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f1f48b')
        .setImage('https://i.imgur.com/egsoAY0.gif')

        message.channel.send(newEmbed);
    }  
}