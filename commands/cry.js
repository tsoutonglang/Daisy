module.exports = {
    name: 'cry',
    description: "i like it when you cry",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f1f48b')
        .setImage('https://i.imgur.com/4plJtVG.gif')

        message.channel.send(newEmbed);
    }
}