module.exports = {
    name: 'help',
    description: "sets up a reaction role message",
    execute (message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f1f48b')
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
/*The prefix for this bot is .s , but you can also just tag the bot with @˙˖♡𑁦 Scarlett (.s help)
:pinkHellokitty: Fun
birthday: Sets your birthday to be congratulated!
decide: Let Scarlett decide for you
games: Play board games with members of the server
goodnight: Notifies people when you're sleeping
ship: Show that you're together with someone by using this command
:pinkComfy: Reactions
headpat: Headpats
hug: Hugs!
kiss: Kiss
no: No
purr: Purr
yes: Yes
:pinkBounce: Useful
remind: Reminds you to do something
search: Searches the web for the image
source: Gets the source of the image through SauceNAO
:pinkArrow: Info
bots: Shows the bots in the server and their prefix
bumps: Shows the user's bump count
credits: Credits the artists who have allowed their art to be used
donate: Get information on how to donate, and what that money gets used for
help: Shows information on all of Scarlett's commands
info: Get information about a bot
privacy: Shows the bot's Privacy Policy
profile: Check your profile
register: Registers / Updates a slash command with the new Discord command system. Recommended to make the json body first
:pinkCheckmark: Moderation
autoban: Toggles the autoban setting
ban: Bans a member
blossomify: Instantly put a message on #₊˚♡彡🌸blossomed
eval: Executes code straight from a message
hoisting: Renames all members who start their name with a !
lock: Locks all the channels during a raid
messages: View the bulk deleted messages from a user (E.g. after a ban)
mute: Mutes a member
purge: Deletes multiple messages from the channel
raid: Defends the server when a raid is happening
unban: Unbans a member
unlock: Unlocks all the channels during a raid
:pinkPress4love: Roles
role: Links a reactiongroup to a message
reactiongroup: Creates a reactiongroup or add roles to one
*/