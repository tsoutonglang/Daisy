module.exports = {
    name: 'welcome',
    description: "welcome people into the server",
    execute(guildMember, Discord, embedColor){
        const baebee = '738238370488254534';
        const daisy = '855168901267456060';
        const moon = '738144225966817331';
        
        if (guildMember.guild.id === baebee) {
            const channel = guildMember.guild.channels.cache.get('738306568675786803');
            const unverifiedRole = guildMember.guild.roles.cache.get('856596232175484929');
            const divider1Role =  guildMember.guild.roles.cache.get('853867187998687242');
            const divider2Role =  guildMember.guild.roles.cache.get('853867433366650950');

            const welcomeMsg = new Discord.MessageEmbed()
                .setColor(embedColor)
                .setTitle("Welcome to Anime & Artists!")
                .setThumbnail('https://i.imgur.com/qilLXH7.gif')
                .setDescription("<a:sideheart:858626585184043018> Read through <#738303555458433117> for access to the rest of the server\n"
                    + "<a:sideheart:858626585184043018> Introduce yourself in <#738248600345116734>\n"
                    + "<a:sideheart:858626585184043018> Get some roles in <#738288684725436516>")
                .setImage('https://i.imgur.com/BmOzDpk.png')
                .setFooter("Please enjoy your stay!", "https://i.imgur.com/PmRwT69.png");

            guildMember.roles.add(unverifiedRole);
            guildMember.roles.add(divider1Role);
            guildMember.roles.add(divider2Role);
            channel.send(`<a:bee:858626567608729651> <@${guildMember.user.id}> <a:bee:858626567608729651>\n`, {embed: welcomeMsg});
        } else if (guildMember.guild.id === daisy) {
            const channel = guildMember.guild.channels.cache.get('887923043945549854');
            const petalRole = guildMember.guild.roles.cache.get('859979053717127168');
            const welcomeMsg = new Discord.MessageEmbed()
                .setColor(embedColor)
                .setTitle("Welcome to Daisy's Garden!")
                .setThumbnail('https://i.imgur.com/qilLXH7.gif')
                .setImage('https://i.imgur.com/QEgHe3Y.gif')
                .setFooter("Please enjoy your stay!", "https://i.imgur.com/PmRwT69.png");
            
            guildMember.roles.add(petalRole);
            channel.send(`<a:bee:858626567608729651> <@${guildMember.user.id}> <a:bee:858626567608729651>\n`, {embed: welcomeMsg});
        } else if (guildMember.guild.id === moon) {
            const welcome = guildMember.guild.roles.cache.get('744230534456017029');
            guildMember.roles.add(welcome);
        }
    }
}