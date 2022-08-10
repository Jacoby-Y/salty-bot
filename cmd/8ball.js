const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
// const mongoose = require("mongoose");
// const UserSave = require('../models/userSchema');
// const { fNum } = require("../utils/numbers.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('eightball')
		.setDescription('Ask my ball and it shall tell')
        .addStringOption(i => i.setName("question").setDescription("Ask away").setRequired(true)),
	async execute(interaction) {
        // let UserProfile = await UserSave.findOne({ userID: interaction.user.id, guildID: interaction.guild.id });
        // if(!UserProfile) {
        //     UserProfile = await new UserSave({
        //         _id: mongoose.Types.ObjectId(),
        //         userID: interaction.user.id,
        //         guildID: interaction.guild.id,
        //         bank: 0,
        //         wallet: 0,
        //     }).save();
        // };

        let question = interaction.options.getString("question");

        let embed = new EmbedBuilder()
            .setColor(0x000000)
            .setTitle('Eight Ball')
            // .setURL('https://discord.js.org/')
            // .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
            // .setDescription("You'd be sooo cringe if you did that, lol.")
            // .setThumbnail('https://i.imgur.com/AfFp7pu.png')
            // .addFields(
            //     { name: 'Regular field title', value: 'Some value here' },
            //     { name: '\u200B', value: '\u200B' },
            //     { name: 'Inline field title', value: 'Some value here', inline: true },
            //     { name: 'Inline field title', value: 'Some value here', inline: true },
            // )
            .addFields(
                { name: 'Your question', value: `${question}` },
                { name: 'My answer', value: `You'd be sooo cringe for that, lol` },
            )
            // .setImage('https://i.imgur.com/AfFp7pu.png')
            .setTimestamp()
            .setFooter({ text: '/help for more commands' });

        await interaction.reply({ embeds: [embed] });
	},
};