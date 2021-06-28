module.exports = {
    name: 'verification',
    description: "verify or get yeeted",
    async execute(reaction, user, client){
        const verifyChnl = client.channels.cache.get('738303555458433117');

        if (reaction.message.channel === verifyChnl) {    
            // roles        
            const verifyRole = reaction.message.guild.roles.cache.get('738601010116689953');
            const unverifiedRole = reaction.message.guild.roles.cache.get('856596232175484929');

            // add verification role
            await reaction.message.guild.members.cache.get(user.id).roles.add(verifyRole);

            // remove unverified role
            await reaction.message.guild.members.cache.get(user.id).roles.remove(unverifiedRole);
        }
    }
}