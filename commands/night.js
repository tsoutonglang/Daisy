module.exports = {
    name: 'night',
    description: "wish someone good night",
    execute(message, client) {
        let trigger ='good night';
        
        if (message.channel.type === 'dm' || message.author.bot)
            return;
        
        let foundInText = false;
        
        for (var i in message.content){
            if (message.content.toLowerCase().includes(trigger.toLowerCase()))
                foundInText = true;
        }

        if (foundInText) {
            message.channel.send("Good night! <:blushingcat:758840549997805618>");
        }
    }
}