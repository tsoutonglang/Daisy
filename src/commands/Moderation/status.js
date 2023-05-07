const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('status')
    .setDescription('Set the bot\'s status (devs only')
    .addStringOption(option => option.setName('status').setDescription('The status you want as the bot\'s presence').setMaxLength(128).setRequired(true))
    .addStringOption(option => option.setName('type').setDescription('The type of status you want the bott to have').addChoices( { name: 'Watching', value: `${4}` }, { name: 'Playing', value: `${1}` }, { name: 'Listening', value: `${3}` }, { name: 'Competing', value: `${6}` }, { name: 'Streaming', value: `${2}` }).setRequired(true)),
    async execute (interaction) {
        const { options } = interaction;
        const status = options.getString('status');
        const type = options.getString('type');

        if (interaction.user.id != "399586594329460737") return await interaction.reply({ content: 'This command is only for devs', ephemeral: true});
        else {
            client.user.setActivity({
                name: status,
                type: type-1,
                url: `https://www.twitch.tv/spacebvnnyexe`
            })

            const embed = new EmbedBuilder()
            .setColor('#92a8d1')
            .setDescription(`:heavy_check_mark: The bot now has the status \`${status}\`, with the type ${type-1}`)

            await interaction.reply({ embeds: [embed], ephemeral: true })
        }
    }
}