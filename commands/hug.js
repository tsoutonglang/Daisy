module.exports = {
    name: 'hug',
    description: "give a hug",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f1c40f')
        .setImage('https://media.tenor.com/images/778282e02d511fbc061e1439a5105c6f/tenor.gif')

        message.channel.send(newEmbed);
    }  
}