module.exports = {
    name: 'reactionrole',
    description: "sets up a reaction role message",
    async execute (message, Discord, client, embedColor){
        if (message.member.roles.cache.has('738248181959229513')){
            const channel = '738288684725436516'; // baebee role channel
            const banner = 'https://i.imgur.com/XEGY8gr.png';

            let bannerEmbed = new Discord.MessageEmbed()
                .setImage(banner)
                .setColor(embedColor);

            message.channel.send(bannerEmbed);
            
            // color
            // emojis
            const strawberryEmoji = '855715140778328064';
            const peachEmoji = '855715138715910144';
            const latteEmoji = '855715427451273226';
            const bananaEmoji = '855715736073011200';
            const kiwiEmoji = '855715138888007692';
            const blueberryEmoji = '856453725266509864';
            const grapeEmoji = '855715140690640896';
            const macaronEmoji = '856447777923006524';
            const chocolateEmoji = '855715138329903115';
            const blackberryEmoji = '855715139609427979';
            const onigiriEmoji = '855715140543840286';
            
            // roles
            const strawberryRole = message.guild.roles.cache.get('739408971374526544');
            const peachRole = message.guild.roles.cache.get('739411499314839613');
            const latteRole = message.guild.roles.cache.get('739409468328116394');
            const bananaRole = message.guild.roles.cache.get('739407375899033691');
            const kiwiRole = message.guild.roles.cache.get('739428147111395388');
            const blueberryRole = message.guild.roles.cache.get('739412039864287303');
            const grapeRole = message.guild.roles.cache.get('739408160082886687');
            const macaronRole = message.guild.roles.cache.get('739406137807470685');
            const chocolateRole = message.guild.roles.cache.get('739410430799118427');
            const blackberryRole = message.guild.roles.cache.get('739410937244680234');
            const onigiriRole = message.guild.roles.cache.get('739409316947427338');

            let colorEmbed = new Discord.MessageEmbed()
                .setColor(embedColor)
                .setDescription('<a:starPink:855377867994562581>  <:alphaC:855367523809886238><:alphaO:855369784929157120><:alphaL:855367523880534066><:alphaO:855369784929157120><:alphaR:855369784955109376><:alphaS:855369784911593502>  <a:starPink:855377867994562581>\n\n'
                    + '˚₊✩‧₊ ━━━━━━━━━━━━━━━ ₊‧✩₊˚\n\n'
                    + `<:dstrawberry:855715140778328064>  <@&739408971374526544>\n`
                    + `<:dpeach:855715138715910144>  <@&739411499314839613>\n`
                    + `<:dlatte:855715427451273226>  <@&739409468328116394>\n`
                    + `<:dbanana:855715736073011200>  <@&739407375899033691>\n`
                    + `<:dkiwi:855715138888007692>  <@&739428147111395388>\n`
                    + `<:dblueberry:856453725266509864>  <@&739412039864287303>\n`
                    + `<:dgrape:855715140690640896>  <@&739408160082886687>\n`
                    + `<:dmacaron:856447777923006524>  <@&739406137807470685>\n`
                    + `<:chocolate:855715138329903115>  <@&739410430799118427>\n`
                    + `<:dblackberry:855715139609427979>  <@&739410937244680234>\n`
                    + `<:donigiri:855715140543840286>  <@&739409316947427338>\n\n`
                    + `˚₊✩‧₊ ━━━━━━━━━━━━━━━ ₊‧✩₊˚`);
        
            let messageEmbed = await message.channel.send(colorEmbed); // tells bot to wait for message to be sent before reacting
            
            // bot react with emojis
            messageEmbed.react(strawberryEmoji);
            messageEmbed.react(peachEmoji);
            messageEmbed.react(latteEmoji);
            messageEmbed.react(bananaEmoji);
            messageEmbed.react(kiwiEmoji);
            messageEmbed.react(blueberryEmoji);
            messageEmbed.react(grapeEmoji);
            messageEmbed.react(macaronEmoji);
            messageEmbed.react(chocolateEmoji);
            messageEmbed.react(blackberryEmoji);
            messageEmbed.react(onigiriEmoji);

            // add roles when user reacts
            client.on('messageReactionAdd', async (reaction, user) => {
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;

                // checks if reaction is happening inside the channel
                if (reaction.message.channel.id == channel){
                    // connects emoji to role
                    if (reaction.emoji.id === strawberryEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(strawberryRole);
                    }
                    if (reaction.emoji.id === peachEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(peachRole);
                    }
                    if (reaction.emoji.id === latteEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(latteRole);
                    }
                    if (reaction.emoji.id === bananaEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(bananaRole);
                    }
                    if (reaction.emoji.id === kiwiEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(kiwiRole);
                    }
                    if (reaction.emoji.id === blueberryEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(blueberryRole);
                    }
                    if (reaction.emoji.id === grapeEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(grapeRole);
                    }
                    if (reaction.emoji.id === macaronEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(macaronRole);
                    }
                    if (reaction.emoji.id === chocolateEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(chocolateRole);
                    }
                    if (reaction.emoji.id === blackberryEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(blackberryRole);
                    }
                    if (reaction.emoji.id === onigiriEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(onigiriRole);
                    }
                } else {
                    return;
                }
            });

            // remove roles when user reacts
            client.on('messageReactionRemove', async (reaction, user) => {
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;

                // checks if reaction is happening inside the channel
                if (reaction.message.channel.id == channel){
                    // connects emoji to role
                    if (reaction.emoji.id === strawberryEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(strawberryRole);
                        console.log('red remove');
                    }
                    if (reaction.emoji.id === peachEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(peachRole);
                        console.log('peach remove');
                    }
                    if (reaction.emoji.id === latteEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(latteRole);
                        console.log('latte remove');
                    }
                    if (reaction.emoji.id === bananaEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(bananaRole);
                    }
                    if (reaction.emoji.id === kiwiEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(kiwiRole);
                    }
                    if (reaction.emoji.id === blueberryEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(blueberryRole);
                    }
                    if (reaction.emoji.id === grapeEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(grapeRole);
                    }
                    if (reaction.emoji.id === macaronEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(macaronRole);
                    }
                    if (reaction.emoji.id === chocolateEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(chocolateRole);
                    }
                    if (reaction.emoji.id === blackberryEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(blackberryRole);
                    }
                    if (reaction.emoji.id === onigiriEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(onigiriRole);
                    }
                } else {
                    return;
                }
            });

            // pronouns
            // emojis
            const sheherEmoji = '856448642347696138';
            const hehimEmoji = '856448642339569684';
            const shehimEmoji = '856448642441150494';
            const shetheyEmoji = '856448643011969024';
            const hetheyEmoji = '856448642633039883';
            const theythemEmoji = '856448641006043167';
            const anyEmoji = '856448642776170497';
            const askEmoji = '856448642634088459';
            const nameEmoji = '856448642356477964';

            // roles
            const sheherRole = message.guild.roles.cache.get('738286665755263017');
            const hehimRole = message.guild.roles.cache.get('738286829815595100');
            const shehimRole = message.guild.roles.cache.get('853930711182213120');
            const shetheyRole = message.guild.roles.cache.get('738286898128355338');
            const hetheyRole = message.guild.roles.cache.get('738286928620683335');
            const theythemRole = message.guild.roles.cache.get('738286868482752553');
            const anyRole = message.guild.roles.cache.get('738292442260045844');
            const askRole = message.guild.roles.cache.get('854006351541174324');
            const nameRole = message.guild.roles.cache.get('854053162067689492');

            // creates embed message
            let pronounEmbed = new Discord.MessageEmbed()
                .setColor(embedColor)
                .setDescription('<a:starBlue:855378665634004992>  <:alphaP:855369784806735903><:alphaR:855369784955109376><:alphaO:855369784929157120><:alphaN:855369784920506388><:alphaO:855369784929157120><:alphaU:855369784602787841><:alphaN:855369784920506388><:alphaS:855369784911593502>  <a:starBlue:855378665634004992>\n\n'
                    + '˚₊✩‧₊ ━━━━━━━━━━━━━━━ ₊‧✩₊˚\n\n'
                    + `<a:heartRed:856448642347696138>  <@&738286665755263017>\n`
                    + `<a:heartPink:856448642339569684>  <@&738286829815595100>\n`
                    + `<a:heartYellow:856448642441150494>  <@&853930711182213120>\n`
                    + `<a:heartGreen:856448643011969024>  <@&738286898128355338>\n`
                    + `<a:heartBlueGreen:856448642633039883>  <@&738286928620683335>\n`
                    + `<a:heartBlue:856448641006043167>  <@&738286868482752553>\n`
                    + `<a:heartPurpleBlue:856448642776170497>  <@&738292442260045844>\n`
                    + `<a:heartPurple:856448642634088459>  <@&854006351541174324>\n`
                    + `<a:heartGold:856448642356477964>  <@&854053162067689492>\n\n`
                    + `˚₊✩‧₊ ━━━━━━━━━━━━━━━ ₊‧✩₊˚`);
        
            messageEmbed = await message.channel.send(pronounEmbed); // tells bot to wait for message to be sent before reacting
            
            // bot react with emojis
            messageEmbed.react(sheherEmoji);
            messageEmbed.react(hehimEmoji);
            messageEmbed.react(shehimEmoji);
            messageEmbed.react(shetheyEmoji);
            messageEmbed.react(hetheyEmoji);
            messageEmbed.react(theythemEmoji);
            messageEmbed.react(anyEmoji);
            messageEmbed.react(askEmoji);
            messageEmbed.react(nameEmoji);

            // add roles when user reacts
            client.on('messageReactionAdd', async (reaction, user) => {
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;

                // checks if reaction is happening inside the channel
                if (reaction.message.channel.id == channel){
                    // connects emoji to role
                    if (reaction.emoji.id === sheherEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(sheherRole);
                    }
                    if (reaction.emoji.id === hehimEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(hehimRole);
                    }
                    if (reaction.emoji.id === shehimEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(shehimRole);
                    }
                    if (reaction.emoji.id === shetheyEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(shetheyRole);
                    }
                    if (reaction.emoji.id === hetheyEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(hetheyRole);
                    }
                    if (reaction.emoji.id === theythemEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(theythemRole);
                    }
                    if (reaction.emoji.id === anyEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(anyRole);
                    }
                    if (reaction.emoji.id === askEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(askRole);
                    }
                    if (reaction.emoji.id === nameEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(nameRole);
                    }
                } else {
                    return;
                }
            });

            // remove role when reacting again
            client.on('messageReactionRemove', async (reaction, user) => {
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;

                // checks if reaction is happening inside the channel
                if (reaction.message.channel.id == channel){
                    // connects emoji to role
                    if (reaction.emoji.id === sheherEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(sheherRole);
                    }
                    if (reaction.emoji.id === hehimEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(hehimRole);
                    }
                    if (reaction.emoji.id === shehimEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(shehimRole);
                    }
                    if (reaction.emoji.id === shetheyEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(shetheyRole);
                    }
                    if (reaction.emoji.id === hetheyEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(hetheyRole);
                    }
                    if (reaction.emoji.id === theythemEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(theythemRole);
                    }
                    if (reaction.emoji.id === anyEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(anyRole);
                    }
                    if (reaction.emoji.id === askEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(askRole);
                    }
                    if (reaction.emoji.id === nameEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(nameRole);
                    }
                } else {
                    return;
                }
            });

            // pings
            //emojis
            const announcementEmoji = '855715166427545600';
            const artEmoji = '855715167048695818';
            const fakeNewsEmoji = '855715166397005844';
            const gameEmoji = '855715166288347156';
            const promptEmoji = '855715166464507914';
            const ventEmoji = '855715166099341314';
            const writingEmoji = '855715166888132608';
            const weddingEmoji = '866755121861230612';

            //roles
            const announcementRole = message.guild.roles.cache.get('741776504089739274');
            const artRole = message.guild.roles.cache.get('741780709940658226');
            const fakeNewsRole = message.guild.roles.cache.get('854004382072700928');
            const gameRole = message.guild.roles.cache.get('760238413160251402');
            const promptRole = message.guild.roles.cache.get('741781454870282402');
            const ventRole = message.guild.roles.cache.get('764706207353012224');
            const writingRole = message.guild.roles.cache.get('841298619675705374');
            const weddingRole = message.guild.roles.cache.get('836087640507678730');

            let pingEmbed = new Discord.MessageEmbed()
                .setColor(embedColor)
                .setDescription('<a:starYellow:855378665709502514>  <:alphaP:855369784806735903><:alphaI:855367523821944842><:alphaN:855369784920506388><:alphaG:855367523884728320><:alphaS:855369784911593502>  <a:starYellow:855378665709502514>\n\n'
                    + '˚₊✩‧₊ ━━━━━━━━━━━━━━━ ₊‧✩₊˚\n\n'
                    + `<a:astarPurplePink:855715166427545600>  <@&741776504089739274>\n`
                    + `<a:astarPurple:855715167048695818>  <@&741780709940658226>\n`
                    + `<a:astarPink:855715166397005844>  <@&854004382072700928>\n`
                    + `<a:astarYellow:866755121861230612>  <@&760238413160251402>\n`
                    + `<a:astarGreen:855715166288347156>  <@&741781454870282402>\n`
                    + `<a:astarBluePink:855715166464507914>  <@&764706207353012224>\n`
                    + `<a:astarBluePastel:855715166099341314>  <@&841298619675705374>\n`
                    + `<a:astarBlue:855715166888132608>  <@&836087640507678730>\n\n`
                    + `˚₊✩‧₊ ━━━━━━━━━━━━━━━ ₊‧✩₊˚`);
        
            messageEmbed = await message.channel.send(pingEmbed); // tells bot to wait for message to be sent before reacting
            // bot react with emojis
            messageEmbed.react(announcementEmoji);
            messageEmbed.react(artEmoji);
            messageEmbed.react(fakeNewsEmoji);
            messageEmbed.react(gameEmoji);
            messageEmbed.react(promptEmoji);
            messageEmbed.react(ventEmoji);
            messageEmbed.react(writingEmoji);
            messageEmbed.react(weddingEmoji);

            // add roles when user reacts
            client.on('messageReactionAdd', async (reaction, user) => {
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;

                // checks if reaction is happening inside the channel
                if (reaction.message.channel.id == channel){
                    // connects emoji to role
                    if (reaction.emoji.id === announcementEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(announcementRole);
                    }
                    if (reaction.emoji.id === artEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(artRole);
                    }
                    if (reaction.emoji.id === fakeNewsEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(fakeNewsRole);
                    }
                    if (reaction.emoji.id === gameEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(gameRole);
                    }
                    if (reaction.emoji.id === promptEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(promptRole);
                    }
                    if (reaction.emoji.id === ventEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(ventRole);
                    }
                    if (reaction.emoji.id === writingEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(writingRole);
                    }
                    if (reaction.emoji.id === weddingEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(weddingRole);
                    }
                } else {
                    return;
                }
            });

            // remove role when reacting again
            client.on('messageReactionRemove', async (reaction, user) => {
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;

                // checks if reaction is happening inside the channel
                if (reaction.message.channel.id == channel){
                    // connects emoji to role
                    if (reaction.emoji.id === announcementEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(announcementRole);
                    }
                    if (reaction.emoji.id === artEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(artRole);
                    }
                    if (reaction.emoji.id === fakeNewsEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(fakeNewsRole);
                    }
                    if (reaction.emoji.id === gameEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(gameRole);
                    }
                    if (reaction.emoji.id === promptEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(promptRole);
                    }
                    if (reaction.emoji.id === ventEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(ventRole);
                    }
                    if (reaction.emoji.id === writingEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(writingRole);
                    }
                    if (reaction.emoji.id === weddingEmoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(weddingRole);
                    }
                } else {
                    return;
                }
            })
            message.delete();
        } else {
            message.reply('you don\'t have permission to use this command');
        }
    }
}