module.exports = {
    name: 'reactionroleadd',
    description: "continues to give reactions even after bot restarts",
    async execute (reaction, user, client){
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;

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
        const strawberryRole = reaction.message.guild.roles.cache.get('739408971374526544');
        const peachRole = reaction.message.guild.roles.cache.get('739411499314839613');
        const latteRole = reaction.message.guild.roles.cache.get('739409468328116394');
        const bananaRole = reaction.message.guild.roles.cache.get('739407375899033691');
        const kiwiRole = reaction.message.guild.roles.cache.get('739428147111395388');
        const blueberryRole = reaction.message.guild.roles.cache.get('739412039864287303');
        const grapeRole = reaction.message.guild.roles.cache.get('739408160082886687');
        const macaronRole = reaction.message.guild.roles.cache.get('739406137807470685');
        const chocolateRole = reaction.message.guild.roles.cache.get('739410430799118427');
        const blackberryRole = reaction.message.guild.roles.cache.get('739410937244680234');
        const onigiriRole = reaction.message.guild.roles.cache.get('739409316947427338');

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
        const sheherRole = reaction.message.guild.roles.cache.get('738286665755263017');
        const hehimRole = reaction.message.guild.roles.cache.get('738286829815595100');
        const shehimRole = reaction.message.guild.roles.cache.get('853930711182213120');
        const shetheyRole = reaction.message.guild.roles.cache.get('738286898128355338');
        const hetheyRole = reaction.message.guild.roles.cache.get('738286928620683335');
        const theythemRole = reaction.message.guild.roles.cache.get('738286868482752553');
        const anyRole = reaction.message.guild.roles.cache.get('738292442260045844');
        const askRole = reaction.message.guild.roles.cache.get('854006351541174324');
        const nameRole = reaction.message.guild.roles.cache.get('854053162067689492');

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

        // neopronouns
        // emojis
        const ititsEmoji = '🌿';
        const xexerEmoji = '🌷';

        // roles
        const  ititsRole = reaction.message.guild.roles.cache.get('887207375260499978');
        const xexerRole = reaction.message.guild.roles.cache.get('887207464183939113');

        // connects emoji to role
        if (reaction.emoji.id === ititsEmoji){
            await reaction.message.guild.members.cache.get(user.id).roles.add(ititsRole);
        }
        if (reaction.emoji.id === xexerEmoji){
            await reaction.message.guild.members.cache.get(user.id).roles.add(xexerRole);
        }
        
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

        //roles
        const announcementRole = reaction.message.guild.roles.cache.get('741776504089739274');
        const artRole = reaction.message.guild.roles.cache.get('741780709940658226');
        const fakeNewsRole = reaction.message.guild.roles.cache.get('854004382072700928');
        const gameRole = reaction.message.guild.roles.cache.get('760238413160251402');
        const promptRole = reaction.message.guild.roles.cache.get('741781454870282402');
        const ventRole = reaction.message.guild.roles.cache.get('764706207353012224');
        const writingRole = reaction.message.guild.roles.cache.get('841298619675705374');
        const weddingRole = reaction.message.guild.roles.cache.get('836087640507678730');

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
    }
}