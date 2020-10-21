

const {Markup} = require('telegraf')
const inlineMessageRatingKeyboard = Markup.inlineKeyboard([
    Markup.callbackButton('👍', 'like'),
    Markup.callbackButton('👎', 'dislike')
  ]).extra();


  module.exports = {
    inlineMessageRatingKeyboard
  }