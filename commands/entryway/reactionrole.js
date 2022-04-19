module.exports = {
    name: 'reactionrole',
    description: "sets up a reaction role message",
    async execute (message, Discord, client, embedColor){
        if (message.member.roles.cache.has('738248181959229513') || message.member.roles.cache.has('858950608933355530')){
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

            // neopronouns
            // emojis
            const ititsEmoji = '🌿';
            const xexerEmoji = '🌷';

            // creates embed message
            let neopronounEmbed = new Discord.MessageEmbed()
                .setColor(embedColor)
                .setDescription('<a:starYellow:855378665709502514>  <:alphaN:855369784920506388><:alphaE:855367523838984222><:alphaO:855369784929157120><:alphaP:855369784806735903><:alphaR:855369784955109376><:alphaO:855369784929157120><:alphaN:855369784920506388><:alphaO:855369784929157120><:alphaU:855369784602787841><:alphaN:855369784920506388><:alphaS:855369784911593502>  <a:starYellow:855378665709502514>\n\n'
                    + '˚₊✩‧₊ ━━━━━━━━━━━━━━━ ₊‧✩₊˚\n\n'
                    + `🌿  <@&887207375260499978>\n`
                    + `🌷  <@&887207464183939113>\n\n`
                    // + `<a:heartYellow:856448642441150494>  <@&853930711182213120>\n`
                    // + `<a:heartGreen:856448643011969024>  <@&738286898128355338>\n`
                    // + `<a:heartBlueGreen:856448642633039883>  <@&738286928620683335>\n`
                    // + `<a:heartBlue:856448641006043167>  <@&738286868482752553>\n`
                    // + `<a:heartPurpleBlue:856448642776170497>  <@&738292442260045844>\n`
                    // + `<a:heartPurple:856448642634088459>  <@&854006351541174324>\n`
                    // + `<a:heartGold:856448642356477964>  <@&854053162067689492>\n\n`
                    + `˚₊✩‧₊ ━━━━━━━━━━━━━━━ ₊‧✩₊˚`);
        
            messageEmbed = await message.channel.send(neopronounEmbed); // tells bot to wait for message to be sent before reacting
            
            // bot react with emojis
            messageEmbed.react(ititsEmoji);
            messageEmbed.react(xexerEmoji);

            // pings
            //emojis
            const announcementEmoji = '855715166427545600';
            const artEmoji = '855715167048695818';
            const fakeNewsEmoji = '855715166397005844';
            const gameEmoji = '866755121861230612';
            const promptEmoji = '855715166288347156';
            const ventEmoji = '855715166464507914';
            const writingEmoji = '855715166099341314';
            const weddingEmoji = '855715166888132608';

            let pingEmbed = new Discord.MessageEmbed()
                .setColor(embedColor)
                .setDescription('<a:starPink:855377867994562581>  <:alphaP:855369784806735903><:alphaI:855367523821944842><:alphaN:855369784920506388><:alphaG:855367523884728320><:alphaS:855369784911593502>  <a:starPink:855377867994562581>\n\n'
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
            message.delete();
        } else {
            message.reply('you don\'t have permission to use this command');
        }
    }
}