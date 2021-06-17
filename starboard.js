require('dotenv').config();

const {Client} = require('discord.js');

const client = new Client({partials: ['MESSAGE', 'REACTION']});

