module.exports = {
    name: 'help',
    description: "sets up a reaction role message",
    execute (message, args, Discord, embedColor){
        const newEmbed = new Discord.MessageEmbed()
        .setColor(embedColor)
        .setTitle("Need some help?")
        .setDescription("The prefix for this bot is \`d.\`\n"
            + "Any questions or suggestions can be sent to <@399586594329460737> or in <#738264467275776110> <a:hearts:784316489523134485>\n\n"
            + "<a:starPink:855377867994562581> **REACTIONS** <a:starPink:855377867994562581>\n"
            + "**blush**: UwU\n"
            + "**celebrate**: Celebration time!\n"
            + "**cheer**: Motivation!\n"
            + "**comfort**: Cheer up baby\n"
            + "**confused**: Nani the fuck?\n"
            + "**cry**: Cry your heart out\n"
            + "**dance**: Dancing queen, only seventeen\n"
            + "**headpat**: Headpats\n"
            + "**hug**: Hugs!\n"
            + "**kick**: RIP\n"
            + "**kiss**: Kiss kiss goodbye\n"
            + "**punch**: RIP\n"
            + "**sleep**: Go to sleep!\n"
            + "**smack**: Smack a bitch\n"
            + "**tackle**: Tackle\n"
            + "**yeet**: This bitch empty, YEET!\n\n")
        .setFooter("Daisy belongs to Anime & Artists and won't be shared to other servers")

        message.channel.send(newEmbed);
    }
}