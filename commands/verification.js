module.exports = {
    name: 'verification',
    description: "verify or get yeeted",
    async execute(reaction, user, client){
        const verifyChnl = client.channels.cache.get('858424513238532149');

        if (reaction.message.channel === verifyChnl) {    
            // roles        
            const verifyRole = reaction.message.guild.roles.cache.get('857704501867184208');
            const unverifiedRole = reaction.message.guild.roles.cache.get('857733794626142238');

            // add verification role
            await reaction.message.guild.members.cache.get(user.id).roles.add(verifyRole);

            // remove unverified role
            await reaction.message.guild.members.cache.get(user.id).roles.remove(unverifiedRole);
        }
    }
}