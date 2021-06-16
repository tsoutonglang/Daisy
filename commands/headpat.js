module.exports = {
    name: 'headpat',
    description: "give a headpat",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f1c40f')
        .setImage('https://i.imgur.com/FnZWRUQ.gif')

        message.channel.send(newEmbed);
    }
}