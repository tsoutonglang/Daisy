module.exports = {
    name: 'information',
    description: 'information about Anime & Artists',
    execute(message) {
        if (message.member.roles.cache.has('858950608933355530')){
            const banner = 'https://i.imgur.com/WA7T2up.png';
            const divider = 'https://i.imgur.com/WLkfVsZ.png';
            const staffImg = 'https://i.imgur.com/17rRLeS.gif';
            const inviteImg = 'https://i.imgur.com/JDOsaan.gif';

            const welcome = '**<a:sideheart:858626585184043018>・Anime and Artists**・<a:sideheart2:859315436179816508>\n\n'
                + 'We\'re an anime and gaming server full of artists!\nWe made our server to make friends and share our work!';
            const staff = '**<a:sideheart:858626585184043018>・Meet the Staff**・<a:sideheart2:859315436179816508>\n\n'
                + '<:wing1:859301031124533269> **Owners** <:wing2:859301031300300800>\n'
                + '<a:luckyRainbow:859302252334546944>・<@466303813939232779>\n<a:luckyMoon:859302252022857749>・<@588797572701749331>\n\n'
                + '<:wing1:859301031124533269> **Admins** <:wing2:859301031300300800>\n'
                + '<a:luckyHorseshoe:859302252312920074>・<@163632166180225025>\n<a:luckyHeart:859302252334153728>・<@399586594329460737>\n<a:luckyFlower:859302252409520138>・<@695104599744577579>\n<a:luckyDiamond:859302252326289428>・<@692248353907408927>\n\n'
                + '<:wing1:859301031124533269> **Mods** <:wing2:859301031300300800>\n'
                + '<a:luckyClover:859302252338741268>・<@475772734446632971>\n<a:luckyRainbow:859302252334546944>・<@738207639401398295>\n<a:luckyMoon:859302252022857749>・<@834574647311204384>\n<a:luckyHorseshoe:859302252312920074>・<@661719717299617801>';
            const invite = '**<a:sideheart:858626585184043018>・Permanent Invite Link・<a:sideheart2:859315436179816508>**\n\nhttps://discord.gg/756CpBh';

            message.channel.send(banner);
            message.channel.send(divider);
            message.channel.send(welcome);
            message.channel.send(divider);
            message.channel.send(staff);
            message.channel.send(divider);
            message.channel.send(staffImg);
            message.channel.send(divider);
            message.channel.send(invite);
            message.channel.send(divider);
            message.channel.send(inviteImg);
        } else {
            message.channel.send("You don\'t have permission to use this command.")
        }
    }
}