module.exports = {
    name: 'help',
    description: "sets up a reaction role message",
    execute (message, Discord, embedColor){
        const newEmbed = new Discord.MessageEmbed()
        .setColor(embedColor)
        .setTitle("Need some help?")
        .addFields(
            {name: "<a:sideheart:858626585184043018> **FAQ** <a:sideheart2:859315436179816508>", value: "The prefix for this bot is \`d.\`\nAny questions or suggestions can be sent to <@399586594329460737> <:dlatte:855715427451273226>"},
            {name: "<a:sideheart:858626585184043018> **REACTIONS** <a:sideheart2:859315436179816508>", value: "**birthday**: Celebrate someone's birthday!\n"
                + "**blush**: UwU\n"
                + "**celebrate**: Celebration time!\n"
                + "**cheer**: Motivation!\n"
                + "**comfort**: Cheer up baby\n"
                + "**confused**: Nani the fuck?\n"
                + "**cry**: Cry your heart out\n"
                + "**dance**: Dancing queen, only seventeen\n"
                + "**headpat**: Headpats\n"
                + "**hug**: Hugs!\n"
                + "**kiss**: Kiss kiss goodbye\n"
                + "**punch**: RIP\n"
                + "**sleep**: Go to sleep!\n"
                + "**smack**: Smack a bitch\n"
                + "**tackle**: Tackle\n"
                + "**yeet**: This bitch empty, YEET!"},
            {name: "<a:sideheart:858626585184043018> **MISC** <a:sideheart2:859315436179816508>", value: "**help**: the screen you're looking at 🤡\n"},
            {name: "<a:sideheart:858626585184043018> **MODERATION** <a:sideheart2:859315436179816508>", value: "*for admin and mod usage only*\n"
                + "**ban**: ban someone from the server\n"
                + "**clear**: clear up to 100 messages\n"
                + "**kick**: kick a member from the server\n"
                + "**jail**: put a member in a private channel with the staff\n"
                + "**lockdown**: lock the server down during raids\n"
                + "**mute**: mute someone for a certain amount of time or indefinitely\n"
                + "**warn**: give a member a warning"}
        )
        .setFooter("Daisy belongs to Anime & Artists and moderation commands won't be shared to other servers.")

        message.channel.send(newEmbed);
    }
}