require('http').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
  res.end('')
})

var TelegramBot = require('node-telegram-bot-api');

var token = '1209605305:AAGh7vRrHTwKoi_2aRf1PPsyBfHCs9XRBg4';

var bot = new TelegramBot(token, {polling: true});

bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, `Hello ${msg.from.first_name}`)
})