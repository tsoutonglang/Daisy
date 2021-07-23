module.exports = {
    name: 'family',
    description: "family >>>",
    execute(message, client) {
        let trigger ='family';
        
        if (message.channel.type === 'dm' || message.author.bot)
            return;
        
        let foundInText = false;
        
        for (var i in message.content){
            if (message.content.toLowerCase().includes(trigger.toLowerCase()))
                foundInText = true;
        }

        if (foundInText) {
            message.channel.send("Did you say family?");
            message.channel.send("<:dom:865523839978045448>");
            message.channel.send("Nothing is stronger than family.");
        }
    }
}