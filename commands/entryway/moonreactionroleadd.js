module.exports = {
    name: 'moonreactionroleadd',
    description: "continues to give reactions even after bot restarts",
    async execute (reaction, user, client){
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;

        // pronouns
        // emojis
        const sheherEmoji = '🌒';
        const hehimEmoji = '🌓';
        const shetheyEmoji = '🌔';
        const hetheyEmoji = '🌔';
        const theythemEmoji = '🌖';
        const anyEmoji = '🌗';
        const nameEmoji = '🌘';

        // roles
        const sheherRole = reaction.message.guild.roles.cache.get('983243166595547136');
        const hehimRole = reaction.message.guild.roles.cache.get('983243286334541835');
        const shetheyRole = reaction.message.guild.roles.cache.get('983243368224137236');
        const hetheyRole = reaction.message.guild.roles.cache.get('983243414634119188');
        const theythemRole = reaction.message.guild.roles.cache.get('983243462285606912');
        const anyRole = reaction.message.guild.roles.cache.get('983243625498562560');
        const nameRole = reaction.message.guild.roles.cache.get('983243573656965160');

        // connects emoji to role
        if (reaction.emoji.id === sheherEmoji){
            await reaction.message.guild.members.cache.get(user.id).roles.add(sheherRole);
        }
        if (reaction.emoji.id === hehimEmoji){
            await reaction.message.guild.members.cache.get(user.id).roles.add(hehimRole);
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
        if (reaction.emoji.id === nameEmoji){
            await reaction.message.guild.members.cache.get(user.id).roles.add(nameRole);
        }
    }
}