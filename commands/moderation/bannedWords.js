module.exports = {
    name: 'bannedWords',
    description: "thou shall not speak these words",
    execute(message, Discord, client, embedColor, ms) {
    let bannedWords = ['rape', 'rapist', 'raping', 'fag', 'faggot', 'chink', 'nigga', 'nigger', 'porn', 'pornography', 'retard', 'retarded', 'dyke', 'tranny'];
        if (message.channel.type === 'dm' || message.author.bot)
            return;
            
        const baebee = '738238370488254534';
        if (message.guild.id === baebee) {
            const logChannel = client.channels.cache.get('868197218258149396')
            let foundInText = false;
            let bannedMessage = message.content.toLowerCase();
            for (var i in bannedWords){
                if (message.content.toLowerCase().includes(bannedWords[i].toLowerCase()))
                    foundInText = true;
            }

            if (foundInText) {
                let logEmbed = new Discord.MessageEmbed()
                    .setDescription(`<@${message.author.id}> said a banned word`)
                    .addFields(
                        { name: "Channel", value: message.guild.channels.cache.get(message.channel.id).toString()},
                        { name: "Message", value: message.content}
                    )
                    .setColor(embedColor)
                    .setTimestamp();
                logChannel.send(logEmbed);
                console.log(`banned word - ${bannedMessage}`)

                const warning1 = message.guild.roles.cache.get('763407901456203856');
                const warning2 = message.guild.roles.cache.get('763408119005970472');
                const muteRole = message.guild.roles.cache.get('858962002626084904');
                const target = message.member;

                let warnEmbed = new Discord.MessageEmbed()
                    .setDescription(`That word is not allowed here <@${message.author.id}>! You've recieved a warning and will be muted for 3 minutes.`)
                    .setColor(embedColor)
                    .setTimestamp();

                function mute(member) {
                    member.roles.add(muteRole);
                    
                    setTimeout(function () {
                        member.roles.remove(muteRole);
                    }, ms("3m"));
                }

                function warningSystem(member) {
                    // has 2 warnings already
                    if (member.roles.cache.has('763408119005970472')) {
                        warnEmbed.setDescription(`That word is not allowed here <@${message.author.id}>! You've recieved your third warning and will be kicked in 30 seconds.`)
                        setTimeout(function () {
                            member.kick();
                        }, ms("30s"));
                    }

                    // has 1 warning already
                    else if (member.roles.cache.has('763407901456203856')) {
                        message.channel.send(warnEmbed);
                        member.roles.add(warning2);
                    }

                    // had no warnings
                    else {
                        message.channel.send(warnEmbed);
                        member.roles.add(warning1);
                    }
                }

                if (message.channel('738268047600648283') || message.channel('766124910744829952'))
                    return;
                else {
                    mute(target);
                    warningSystem(target);
                    message.delete();
                }
            }
        }
        else {
            const warning = '863928953165053963';
            const target = message.member;

            let foundInText = false;

            for (var i in bannedWords){
                if (message.content.toLowerCase().includes(bannedWords[i].toLowerCase()))
                    foundInText = true;
            }

            if (foundInText) {
                let warnEmbed = new Discord.MessageEmbed()
                    .setDescription(`That word is not allowed here <@${message.author.id}>! You've recieved a warning and will be muted for 3 minutes.`)
                    .setColor(embedColor)
                    .setTimestamp();

                function mute(member) {
                    member.roles.add(muteRole);
                    
                    setTimeout(function () {
                        member.roles.remove(muteRole);
                    }, ms("3m"));
                }

                message.channel.send(warnEmbed);
                target.roles.add(warning);
            }
            
        }
    }
}