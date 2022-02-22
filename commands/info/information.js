module.exports = {
    name: 'information',
    description: 'information about Anime & Artists',
    execute(message) {
        if (message.member.roles.cache.has('738248181959229513')){
            const banner = 'https://i.imgur.com/WA7T2up.png';
            const divider = 'https://i.imgur.com/WLkfVsZ.png';
            const staffImg = 'https://i.imgur.com/17rRLeS.gif';
            const inviteImg = 'https://i.imgur.com/JDOsaan.gif';
            const channelImg = 'https://i.imgur.com/i2WlP64.gif';
            const welcomeImg = 'https://i.imgur.com/WGM49n2.gif';

            const welcome = '**<a:sideheart:858626585184043018>・Anime and Artists**・<a:sideheart2:859315436179816508>\n\n'
                + '<a:luckyRainbow:859302252334546944>・We\'re an anime and gaming server full of artists!\n<a:luckyMoon:859302252022857749>・We made our server to make friends and share our work!';
            const staff = '**<a:sideheart:858626585184043018>・Meet the Staff**・<a:sideheart2:859315436179816508>\n\n'
                + '<:wing1:859301031124533269> **Owners** <:wing2:859301031300300800>\n'
                + '<a:luckyRainbow:859302252334546944>・<@466303813939232779>\n<a:luckyMoon:859302252022857749>・<@588797572701749331>\n\n'
                + '<:wing1:859301031124533269> **Admins** <:wing2:859301031300300800>\n'
                + '<a:luckyHorseshoe:859302252312920074>・<@163632166180225025>\n<a:luckyHeart:859302252334153728>・<@399586594329460737>\n<a:luckyFlower:859302252409520138>・<@660385335397842965>\n<a:luckyDiamond:859302252326289428>・<@692248353907408927>\n\n'
                + '<:wing1:859301031124533269> **Mods** <:wing2:859301031300300800>\n'
                + '<a:luckyClover:859302252338741268>・<@475772734446632971>\n<a:luckyRainbow:859302252334546944>・<@738207639401398295>\n<a:luckyMoon:859302252022857749>・<@661719717299617801>';
                + '<:wing1:859301031124533269> **Promoters** <:wing2:859301031300300800>\n'
            const invite = '**<a:sideheart:858626585184043018>・Permanent Invite Link・<a:sideheart2:859315436179816508>**\n\nhttps://discord.gg/756CpBh';
            const channels = '**<a:sideheart:858626585184043018>・Info of Some Channels**・<a:sideheart2:859315436179816508>\n\n'
                + '<a:luckyRainbow:859302252334546944>・<#738303555458433117>・The server rules\n'
                + '<a:luckyMoon:859302252022857749>・<#738248600345116734>・Introduce yourself\n'
                + '<a:luckyHorseshoe:859302252312920074>・<#738288684725436516>・Get some roles here\n'
                + '<a:luckyHeart:859302252334153728>・<#738263635964592191>・Keep up with the server announcements!\n'
                + '<a:luckyFlower:859302252409520138>・<#869300743541235792>・Our starboard. Posts with 3 or more <:hyena_laugh:738261600003424387> reactions get posted here.\n'
                + '<a:luckyDiamond:859302252326289428>・<#738264467275776110>・Any questions or suggestions you want to see in the server should go in here.\n'
                + '<a:luckyClover:859302252338741268>・<#762171939522740224>・For a general overview of when our staff is active!'

            message.channel.send(banner);
            message.channel.send(divider);
            message.channel.send(welcome);
            message.channel.send(divider);
            message.channel.send(welcomeImg);
            message.channel.send(divider);
            message.channel.send(channels);
            message.channel.send(divider);
            message.channel.send(channelImg);
            message.channel.send(divider);
            message.channel.send(staff);
            message.channel.send(divider);
            message.channel.send(staffImg);
            message.channel.send(divider);
            message.channel.send(invite);
            message.channel.send(divider);
            message.channel.send(inviteImg);
            message.delete();
        } else {
            message.reply("you don\'t have permission to use this command.")
        }
    }
}