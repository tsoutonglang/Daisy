module.exports = {
    name: 'verification',
    description: "verify or get yeeted",
    async execute(reaction, user, client){
        const baebee = '738238370488254534';

        if (reaction.message.guild.id === baebee) {
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
        } else { // daisy
            const verifyChnl = client.channels.cache.get('860412185283788842');

            if (reaction.message.channel === verifyChnl) {    
                // roles        
                const verifyRole = reaction.message.guild.roles.cache.get('859979053717127168');
                const unverifiedRole = reaction.message.guild.roles.cache.get('860808284633563168');

                // add verification role
                await reaction.message.guild.members.cache.get(user.id).roles.add(verifyRole);

                // remove unverified role
                await reaction.message.guild.members.cache.get(user.id).roles.remove(unverifiedRole);
            }
        }
    }
}