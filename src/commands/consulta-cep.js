const { consultarCep } = require("correios-brasil");
const { cancelButton } = require("../text");

const consultaCep = async (ctx) => {
  const data = ctx.update.message.text.split(" ");

  const cepNumber = data[1]?.replace("-", "") || "";

  if (
    !cepNumber ||
    cepNumber.length < 5 ||
    cepNumber.length > 10 ||
    !Number(cepNumber)
  ) {
    await ctx.reply("❌ Erro! Por favor, digite um cep válido!", {
      reply_to_message_id: ctx.message.message_id,
      reply_markup: cancelButton,
    });
    return;
  }

  try {
    const result = await consultarCep(cepNumber);

    if (!result) {
      await ctx.reply("❌ Erro! Cep não encontrado!", cancelButton);
      return;
    }

    await ctx.reply(
      `✅ CEP Encontrado!
  
UF: ${result.uf || "Não localizado"}  
CIDADE: ${result.localidade || "Não localizado"}
BAIRRO: ${result.bairro || "Não localizado"}  
LOGRADOURO: ${result.logradouro || "Não localizado"}  
CEP: ${result.cep || "Não localizado"}`,
      cancelButton
    );
  } catch (error) {
    await ctx.reply("❌ Erro! Cep não encontrado!", cancelButton);
    return;
  }
};

module.exports = { consultaCep };
