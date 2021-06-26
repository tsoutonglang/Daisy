module.exports = {
    name: 'welcome',
    description: "welcome people into the server",
    execute(guildMember, Discord){
        const channel = guildMember.guild.channels.cache.get('738306568675786803');
        const unverifiedRole = guildMember.guild.roles.cache.get('857733794626142238');
        const divider1Role =  guildMember.guild.roles.cache.get('853867187998687242');
        const divider2Role =  guildMember.guild.roles.cache.get('853867433366650950');

        const welcomeMsg = new Discord.MessageEmbed()
            .setColor('#f1f48b')
            .setTitle("Welcome to Anime & Artists! <a:hearts:784316489523134485>")
            .setThumbnail('https://i.imgur.com/5lqDNxP.gif')
            .setDescription("<a:astarPurple:855715167048695818> Read through <#738303555458433117> for access to the rest of the server\n"
                + "<a:astarPurple:855715167048695818> Introduce yourself in <#738248600345116734>\n"
                + "<a:astarPurple:855715167048695818> Get some roles in <#738288684725436516>")
            .setImage('https://i.imgur.com/GlY3T6m.png')
            .setFooter("Please enjoy your stay!", "https://i.imgur.com/PmRwT69.png");

        guildMember.roles.add(unverifiedRole);
        guildMember.roles.add(divider1Role);
        guildMember.roles.add(divider2Role);
        channel.send(`Welcome <@${guildMember.user.id}>!\n`, {embed: welcomeMsg});
    }
}