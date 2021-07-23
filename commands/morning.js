module.exports = {
    name: 'morning',
    description: "wish someone a good morning",
    execute(message, client) {
        let trigger ='good morning';
        
        if (message.channel.type === 'dm' || message.author.bot)
            return;
        
        let foundInText = false;
        
        for (var i in message.content){
            if (message.content.toLowerCase().includes(trigger.toLowerCase()))
                foundInText = true;
        }

        if (foundInText) {
            message.channel.send("Good morning! <:yamalove:755571421182296085>");
        }
    }
}