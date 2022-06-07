module.exports = {
    name: 'moonreactionrole',
    description: "sets up a reaction role message",
    async execute (message, Discord, client, embedColor){
        if (message.member.roles.cache.has('738252315747942452') || message.member.roles.cache.has('858950608933355530')){
            // pronouns
            // emojis
            const sheherEmoji = '🌒';
            const hehimEmoji = '🌓';
            const shetheyEmoji = '🌔';
            const hetheyEmoji = '🌔';
            const theythemEmoji = '🌖';
            const anyEmoji = '🌗';
            const nameEmoji = '🌘';

            // creates embed message
            let pronounEmbed = new Discord.MessageEmbed()
                .setColor(embedColor)
                .setDescription('<a:starBlue:855378665634004992>  <:alphaP:855369784806735903><:alphaR:855369784955109376><:alphaO:855369784929157120><:alphaN:855369784920506388><:alphaO:855369784929157120><:alphaU:855369784602787841><:alphaN:855369784920506388><:alphaS:855369784911593502>  <a:starBlue:855378665634004992>\n\n'
                    + '˚₊✩‧₊ ━━━━━━━━━━━━━━━ ₊‧✩₊˚\n\n'
                    + `🌒  <@&983243166595547136>\n`
                    + `🌓  <@&983243286334541835>\n`
                    + `🌔  <@&983243368224137236>\n`
                    + `🌔  <@&983243414634119188>\n`
                    + `🌖  <@&983243462285606912>\n`
                    + `🌗  <@&983243625498562560>\n`
                    + `🌘  <@&983243573656965160>\n`
                    + `˚₊✩‧₊ ━━━━━━━━━━━━━━━ ₊‧✩₊˚`);
        
            messageEmbed = await message.channel.send(pronounEmbed); // tells bot to wait for message to be sent before reacting
            
            // bot react with emojis
            messageEmbed.react(sheherEmoji);
            messageEmbed.react(hehimEmoji);
            messageEmbed.react(shetheyEmoji);
            messageEmbed.react(hetheyEmoji);
            messageEmbed.react(theythemEmoji);
            messageEmbed.react(anyEmoji);
            messageEmbed.react(nameEmoji);

            message.delete();
        } else {
            message.reply('you don\'t have permission to use this command');
        }
    }
}