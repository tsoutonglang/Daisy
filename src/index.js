const { Client, 
    GatewayIntentBits, 
    EmbedBuilder, 
    PermissionsBitField, 
    Permissions, 
    MessageManager, 
    Embed, 
    Collection, 
    Events ,
    ActivityType
} = require(`discord.js`);
const fs = require('fs');
const client = new Client({ intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers, 
    GatewayIntentBits.MessageContent
] });

client.commands = new Collection();

require('dotenv').config();

const functions = fs.readdirSync("./src/functions").filter(file => file.endsWith(".js"));
const eventFiles = fs.readdirSync("./src/events").filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync("./src/commands");

(async () => {
    for (file of functions) {
        require(`./functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, "./src/events");
    client.handleCommands(commandFolders, "./src/commands");
    client.login(process.env.token);
})();

// default activity (can be changed with command)
client.on('ready', () => {
    client.user.setActivity('The Bee Movie', { type: ActivityType.Watching });
})

const { QuickDB } = require('quick.db')
const db = new QuickDB();

client.on(Events.GuildMemberAdd, async (member) => {
    const channelID = await db.get(`welchannel_${member.guild.id}`)
    const channel = member.guild.channels.cache.get(channelID)

    const embed = new EmbedBuilder()
        .setColor('#f7cac9')
        .setTitle(`Welcome to the bee hive!`)
        .setDescription(`<a:sideheart:858626585184043018> Read through <#738303555458433117> for access\n
            <a:sideheart:858626585184043018> Introduce yourself in <#738248600345116734>\n
            <a:sideheart:858626585184043018> Get some roles in <#738288684725436516>`)
        .setImage('https://i.imgur.com/dbtyVJu.gif')
        .setTimestamp()
        .setThumbnail('https://i.imgur.com/6Z6Cg5t.gif')

    if (channelID == null) return;

    channel.send({ embeds: [embed] })
})

client.on(Events.GuildMemberRemove, async (member) => {
    const channelID = await db.get(`welchannel_${member.guild.id}`)
    const channel = member.guild.channels.cache.get(channelID)

    const embed = new EmbedBuilder()
        .setColor('#f7cac9')
        .setTitle("See you later!")
        .setDescription(`${member} left the bee hive!`)
        .setImage('https://i.imgur.com/zDbxpc5.gif')
        .setTimestamp()

    if (channelID == null) return;

    channel.send({ embeds: [embed] })
})