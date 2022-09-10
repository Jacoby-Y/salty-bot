const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
// const mongoose = require("mongoose");
// const UserSave = require('../models/userSchema');
// const { fNum } = require("../utils/numbers.js");
const firstVoreUnixMillisecond = 1661978370000 // seconds +/- 30
const jermaVoresPerMillisecond = 0.00069930069 // 

module.exports = {
	data: new SlashCommandBuilder()
		.setName('jerma')
		.setDescription('Jerma eat many frongs.'),
	async execute(interaction) {
        // Snatched from a demo
        const currentVoreUnix = +new Date;
        const ttlVores = Math.floor((currentVoreUnix - firstVoreUnix) * jermaVoresPerMillisecond)

        let embed = new EmbedBuilder()
            .setColor(0x000000)
            .setTitle(`Jerma's eaten ~${ttlVores} frogs.`)
            // .setTimestamp()
            // .setFooter({ text: '/help for more commands' });

        await interaction.reply({ embeds: [embed] });
	},
};