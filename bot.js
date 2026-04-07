const { Client, GatewayIntentBits, SlashCommandBuilder, REST, Routes } = require('discord.js');

const token = "MTQ5MTA3MjYxNzYxNTE5NjMwMg.G9HSTh.WdNV19L7EuzL8t0PUdwTeGQjtcOtNn8e_8HUqw";
const clientId = "1491072617615196302";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const commands = [
  new SlashCommandBuilder()
    .setName('tpa')
    .setDescription('toilet paper awesome')
    .toJSON()
];

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
  await rest.put(
    Routes.applicationCommands(clientId),
    { body: commands }
  );
})();

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'tpa') {
    await interaction.reply(`toilet paper awesome
toilet paper awesome`);
  }
});

client.login(token);