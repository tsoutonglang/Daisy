module.exports = {
    name: 'rules',
    description: "the laws of the land",
    execute(message, args) {
        let ruleS1 = `＊*•̩̩͙✩•̩̩͙*˚ **Rules** ˚*•̩̩͙✩•̩̩͙*˚＊\n\n`
            + `**1・Must abide by Discord's Terms of Service and guidelines**\nhttps://discord.com/terms\nhttps://discord.com/guidelines\n\n`
            + `**2・Think before you post**\nWe want this server to be friendly and safe for everyone! Respect everyone, even if you don't like someone. Do not leak personal information you don't want to be shared elsewhere.\n\n`
            + `**3・No harassment or bullying**\nNo racism, hate speech, threatening, or sexual harassment etc. within the server or in DMs. These topics are not limited here so don't try to find loopholes. No drama within the server! If you create or participate in drama, we have the right to mute or kick you.\n\n`
            + `**4・No NSFW, extreme gore, or mentions of self harm**\nPosting an image/link of something NSFW, includes death/real body parts, or glorifies/promotes suicide/self harm/health disorders will result in an automatic ban or warnings. Profile pictures, nicknames, usernames, statuses, and bio's containing any of this content must be changed. Refusal to change your profile picture and/or name will result with you kicked from the server. Sexualizing any server members, our members' original characters, and any canon characters in any way is a **bannable** offense.\n__If you do feel the need to vent about suicide/self harm/health disorders, please go to <#738268047600648283> or <#766124910744829952> or contact your local suicide hotline.__\n\n`
            + `**5・Use the correct channels**\nMake sure to read the channel descriptions for instructions. Do not interrupt chats by spamming emotes, gifs, texts, or images.`;
        let ruleS2 = `** **\n`
            + `**6・No spoilers**\nDon't spoil shows, movies, games, etc. that have been recently released (about 2 weeks). If you're unsure if something is still considered spoiling, use the spoiler tags anyway. Any manga content that is past what the series' anime adaptation is on is considered a spoiler. Keep these within <#762179029724823562> and use the format [series name] \\||spoiler\\|| (ex. Demon Slayer ||<a:rickroll:858574283893768202>||)\n*How to use the spoiler tags*\n・Text: They look like \\||this\\||. If done correctly will make your text look like ||this||.\n・Images: Edit the image file's name to SPOILER_filename. (ex. SPOILER_shinobu.png)\n\n`
            + `**7・Don't try to bypass banned words**\nThese words are *banned* from the server. Saying these words by altering a letter and/or adding symbols will result in a warning or ban. These words include ||rape/rapist/raping|| ||fag/faggot(s)|| ||chink|| ||nigga/nigger|| ||porn|| ||cum|| ||retard/retarded||\n\n`
            + `**8・Listen to the staff members**\nListen to our warnings or instructions when we give you them and don’t make excuses. Don’t lie to staff, don’t exaggerate situations, and don’t give false reports. Don't ignore staff just because something isn't explicitly stated in the rules.  If there's an issue/you see someone misbehaving please DM/ping an active <@!738248181959229513> or a <@!739030988944048199>. __*Use the actual admin or moderator pings ONLY in serious cases.*__\n\n`
            + `**Vent Channels**\n・Any type of vent (big or small) should go in <#738268047600648283> or <#766124910744829952>.\n・We ask that you TW and spoiler your heavier vents. If you’re unsure what would be classed as a heavy vent, spoiler and TW just in case.\n・Feel free to ping <@764706207353012224> if you need advice\n\n`
            +`**Voice Chats**\n・No earrape. Delibrately lowered quality and/or distorted music is considered as earrape. Yelling is considered earrape. Micspam is considered as earrape.\n・All of the server rules still apply to voice channels.`;
        let ruleS3 = `** **\n`
            + `**Misc.**\n`
            + `・*No mini-modding*: Don't act as a mod, just mention one of the staff that's online.\n`
            + `・Don’t bend the rules, nitpick the wordings, or otherwise try to manipulate the system.\n`
            + `・__You can get far by using common sense.__\n\n`
            + `**Warnings**\nVerbal warning\nWarning 1: Loss in voice chat and outside emoji privileges\nWarning 2: Loss in image privileges\nWarning 3: Kick or ban\n・This warning system is subject to change based on certain rules and regulations.\n・Verbal warnings are for situations that are on thin ice. Anything that goes against our guidelines is an immediate warning.\n・If you feel like our actions are unjustified, you can dm one of the staff members to appeal your case to us.\n\n`
            + `**__*We hold the right to modify the rules whenever we want.*__**\n\n`
            + `**If you understand our rules, please react to the 🐝 below !**`;

        message.channel.send(ruleS1);
        message.channel.send(ruleS2);
        message.channel.send(ruleS3);
    }
}