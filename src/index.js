const { Telegraf } = require("telegraf");
const { consultaCep } = require("./commands/consulta-cep");
const { menu } = require("./text");

(async () => {
  const bot = new Telegraf("1822218649:AAHxYgX-D3U2awJICRZnXbomrtMTBqWUlXQ");

  bot.start(async (ctx) => {
    await ctx.reply(menu);
  });

  bot.command(["/cep", "/Cep", "/CEP"], async (ctx) => {
    ctx.update.message;
    await consultaCep(ctx);
  });

  await bot.launch();

  console.log(`🤖 Bot iniciado com sucesso!`);
})();
