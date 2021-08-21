const { Keyboard } = require("telegram-keyboard");

const menu = (firstName) => `
━━━━━━━━❮◆❯━━━━━━━━
◆◇  
◆◇ Olá ${firstName}
◆◇ seja bem vindo(a) 
◆◇ ao menu de consultas
◆◇  
━━━━━━━━❮◆❯━━━━━━━━
◆◇  
◆◇ 🤖 BARAN XD BOT 🤖
◆◇ 
◆◇ Prefixo:『 / 』
◆◇ Créditos:『 Aldebaiano/adrx 』
◆◇  
━━━━━━━━❮◆❯━━━━━━━━
◆◇ 
◆◇『•CONSULTAS FREE•』
◆◇
◆◇『 ✅ 』/cep
◆◇『 ❌ 』/cpf
◆◇『 ❌ 』/ip
◆◇『 ❌ 』/rastrear_encomenda
◆◇『 ❌ 』/telefone
◆◇  
━━━━━━━━❮◆❯━━━━━━━━`;

const cancelButton = Keyboard.make([["✖ Cancelar"]]).inline();

module.exports = { menu, cancelButton };
