//t.me/BBBobbot
//1161475824:AAEefR64wLIqLK2zft_WNohsooFCLx_e2XY

const { Telegraf } = require("telegraf");

const Extra = require('telegraf/extra')

const Markup = require('telegraf/markup')

const { Keyboard } = require('telegram-keyboard')

const bot = new Telegraf("1161475824:AAEefR64wLIqLK2zft_WNohsooFCLx_e2XY");

const {inlineMessageRatingKeyboard} = require('./botButtonModule')

bot.start((ctx) => {
  if (ctx.from.last_name) {
    ctx.reply(`Привет, ${ctx.from.first_name} ${ctx.from.last_name}!
  Я бот Бобби ! )
  Чем могу помочь?`);
  } else {
    ctx.reply(`Привет, ${ctx.from.first_name}!
    Я бот Бобби ! )
  Чем могу помочь?`);
  }
  ctx.reply('Как настроение?',
    Extra.HTML()
    .markup(Markup.inlineKeyboard([
      Markup.callbackButton('Неплохо', 'not bad'),
      Markup.callbackButton('Лучше всех', 'all right')
    ])))

});

bot.command("info", (ctx) => {
  ctx.reply(`Я интелектуальный бот - Боби,
  созданный для облегчения жизни Пользователя!
  все права защищены,
  автор : Roman Zaviazkin 
  zavyazkin8@gmail.com
  +996 708 733 000`);
});





bot.action('not bad', (ctx) => {
  ctx.editMessageText('Надеюсь еще улучшиться! Улыбнись)))',
    Extra.HTML())
})
bot.action('all right', (ctx) => {
  ctx.editMessageText('Желаю всегда такого настроения!!!',
    Extra.HTML())
})










const MY_SCHEDULE = [
  {
    dayName: "Воскресенье",
    lessons: ["выходной"],
  },

  {
    dayName: "Понедельник",
    lessons: [
      [
        "Математика",
        " время : 08:00",
        " преподаватель : Джумабаев А.А.",
        " аудитория : 1/114",
      ],
      [
        "Физика",
        " время : 10:00",
        " преподаватель : Алиева А.К.",
        " аудитория : 1/207",
      ],
      [
        "Литература",
        " время : 12:00",
        " преподаватель : Лермантов Ф.Н.",
        " аудитория : 2/217",
      ],
    ],
  },
  {
    dayName: "Вторник",
    lessons: [
      [
        "Английский",
        " время : 08:00",
        " преподаватель : Стридж А.А.",
        " аудитория : 3/420",
      ],
      [
        "Механика",
        " время : 11:00",
        " преподаватель : Федосеев А.В.",
        " аудитория : 4/121",
      ],
      [
        "История",
        " время : 13:00",
        " преподаватель : Ломоносов Л.Н.",
        " аудитория : 2/114",
      ],
    ],
  },
  {
    dayName: "Среда",
    lessons: [
      [
        "Математика",
        " время : 08:00",
        " преподаватель : Джумабаев А.А.",
        " аудитория : 2/109",
      ],
      [
        "Физика",
        " время : 10:00",
        " преподаватель : Алиева А.К.",
        " аудитория : 1/114",
      ],
      [
        "Биология",
        " время : 13:00",
        " преподаватель : Бабочкова Ф.Н.",
        " аудитория : 4/307",
      ],
    ],
  },
  {
    dayName: "Четверг",
    lessons: [
      [
        "IT",
        " время : 09:00",
        " преподаватель : Хогвардс О.С.",
        " аудитория : 1/102",
      ],
      [
        "Исскуство",
        " время : 11:00",
        " преподаватель : Врун А.Л.",
        " аудитория : 4/214",
      ],
      [
        "Литература",
        " время : 15:00",
        " преподаватель : Лермантов Ф.Н.",
        " аудитория : 1/205",
      ],
    ],
  },
  {
    dayName: "Пятница",
    lessons: [
      [
        "Кыргызский",
        " время : 11:00",
        " преподаватель : Русских А.А.",
        " аудитория : 4/254",
      ],
      [
        "Русский",
        " время : 13:00",
        " преподаватель : Незнайко А.О.",
        " аудитория : 5/108 ",
      ],
      [
        "Литература",
        " время : 17:00",
        " преподаватель : Лермантов Ф.Н.",
        " аудитория : 3/202 ",
      ],
    ],
  },
  {
    dayName: "Суббота",
    lessons: ["выходной"],
  },
];

bot.command("schedule", (ctx) => {
  const today = new Date().getDay();
  const todayTime = new Date().getHours();
  const schedule = MY_SCHEDULE[today];
  function getLate() {
    for (let i in schedule.lessons) {
      let myTime = parseInt(schedule.lessons[i][1].slice(9, 11));
      if (myTime <= todayTime && myTime + 2 >= todayTime) {
        return `Уже ${todayTime}:${new Date().getMinutes()} ! Ты опаздываешь на занятие 😱😱😱 `;
      } else if (myTime > todayTime && myTime + 2 > todayTime) {
        return `Сейчас ${todayTime}:${new Date().getMinutes()}, ты успеваешь на занятие 🤗🤗🤗`;
      } else if (myTime + 8 > todayTime && myTime + 3 < todayTime) {
        return `Сейчас ${todayTime}:${new Date().getMinutes()}, твои занятие уже давно закончились🤓🤓🤓`;
      } else {
        return `Сейчас ${todayTime}:${new Date().getMinutes()}, следующее занятие не скоро😇😇😇`;
      }
    }
  }

  if (today > 5) {
    today === 6
      ? ctx.reply("Сегодня суббота, какие уроки ?")
      : ctx.reply("Сегодня воскресенье, какие уроки ?");
  } else {
    ctx.reply(`
      Сегодня ${schedule.dayName} 🤯🤯🤯
    
      Ваше расписание:
      ${schedule.lessons.map((item) => {
        return `\n ${item},\n `;
      })}

      ${getLate()}
  `);
  }
});















const JOKES_ARRAY = [
  "Кассирша спрашивает у покупателя: — Молодой человек, мелочь не посмотрите? Покупатель: — Ну... показывайте... 🤣🤣🤣",
  "- Девушка, а сколько вам лет?- Восемнадцать лет и несколько месяцев.- А конкретно - сколько месяцев?- Сто шестьдесят восемь...🤣🤣🤣",
  "Урок биологии. Учительница говорит детям: — Дети! Вы знаете, что тычинка и пестик у цветочков — это органы размножения. С задней парты Вовочка: — Твою мать! А я их нюхал. 🤣🤣🤣",
  "— А я сегодня кота купил. — Зачем? — Жена мышей боится. — А мыши откуда? — Сам вчера принес. — Для чего?!! — Давно хотел кота завести...🤣🤣🤣",
  "- Есть ли у тебя мечта? - Есть. - Какая? - Хочу бросить пить. - Так брось. - А как потом жить без мечты? 🤣🤣🤣",
];

function getRandomArbitrary(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

bot.command("joke", (ctx) => {
  const random = getRandomArbitrary(0, 4);
  const jokeRandom = JOKES_ARRAY[random];
  ctx.reply(jokeRandom);
});

bot.command("help", (ctx) => {
  ctx.reply(`Вы находитесь в разделе помощь:
  получить совет - /advice`);
});

bot.command("advice", (ctx) => {
  ctx.reply(`Люди всегда говорят: «Хорошая работа та,
   от которой вы получаете удовольствие каждый день».
    Это НЕВЕРНОЕ УТВЕРЖДЕНИЕ. Хорошая работа — это та работа,
     которую вы можете терпеть большинство рабочих дней,
      и при этом она покрывает все ваши расходы.
       Почти ни у кого нет работы, которую можно обожать каждую секунду.`);
});




















bot.on("sticker", (ctx) => {
  ctx.reply("Нельзя отправлять стикеры!!! 🤪");
});









function startBot() {
  bot.startPolling();
  console.log("bot is started");
}




























bot.hears('КОМАНДЫ', (ctx) => {
  ctx.reply(`Ниже перечислены все команды бота:\n
  /info - информация о боте (описание, автор и тд.) \n
  /help - раздел помощи \n
  /schedule - информация о расписании занятий на сегодня \n
  /joke - шутка от бота \n
  `)
  ctx.telegram.sendMessage(ctx.from.id, "Тебе понравился бот?", inlineMessageRatingKeyboard);
})



const { make, combine } = Keyboard


const backKeyboard = make(['Back'])

const main = ({ reply }) => {
    return reply('MENU', make(['КОМАНДЫ', 'РАСПИСАНИЕ', 'ПИРАМИДА ПОЖЕЛАНИЙ'], { columns: 1 }).builtIn())
}

bot.start(main)
bot.hears('Back', main)

bot.hears('КОМАНДЫ', ({ reply }) => {
    const keyboard = make(['1', '2', '3', '4', '5', '6'], { columns: 2 })

    return reply('КОМАНДЫ', combine(keyboard, backKeyboard).builtIn())
})

bot.hears('РАСПИСАНИЕ', ({ reply }) => {
    const keyboard = make(['Понедельник','Вторник', "Среда","Четверг", "Пятница"], {
        wrap: row => row.length > Math.floor(Math.random() * 8)
    })

    return reply('РАСПИСАНИЕ', combine(keyboard, backKeyboard).builtIn())
})

bot.hears('ПИРАМИДА ПОЖЕЛАНИЙ', ({ reply }) => {
    const keyboard = make(['-1-', '-2-', '-3-', '-4-', '-5-', '-6-', '-7-'], {
        wrap: (row, i) => row.length >= (i + 1) / 2
    })

    return reply('ПИРАМИДА ПОЖЕЛАНИЙ', combine(keyboard, backKeyboard).builtIn())
})






bot.hears('Понедельник', (ctx) => {
  ctx.reply(`${MY_SCHEDULE[1].lessons[0]} \n
  ${MY_SCHEDULE[1].lessons[1]}\n
  ${MY_SCHEDULE[1].lessons[2]}`)
})

bot.hears('Вторник', (ctx) => {
  ctx.reply(`${MY_SCHEDULE[2].lessons[0]} \n
  ${MY_SCHEDULE[2].lessons[1]}\n
  ${MY_SCHEDULE[2].lessons[2]}`)
})

bot.hears('Среда', (ctx) => {
  ctx.reply(`${MY_SCHEDULE[3].lessons[0]} \n
  ${MY_SCHEDULE[3].lessons[1]}\n
  ${MY_SCHEDULE[3].lessons[2]}`)
})

bot.hears('Четверг', (ctx) => {
  ctx.reply(`${MY_SCHEDULE[4].lessons[0]} \n
  ${MY_SCHEDULE[4].lessons[1]}\n
  ${MY_SCHEDULE[4].lessons[2]}`)
})

bot.hears('Пятница', (ctx) => {
  ctx.reply(`${MY_SCHEDULE[5].lessons[0]} \n
  ${MY_SCHEDULE[5].lessons[1]}\n
  ${MY_SCHEDULE[5].lessons[2]}`)
})




bot.hears('-1-', (ctx) => {
  ctx.reply(`Самые лучшие пожелания всегда на верхушке пирамиды!
  оглянись! тебе нечего желать ... у тебя все есть!!!`)
})

bot.hears('-2-', (ctx) => {
  ctx.reply(`Верь в себя и все сбудиться!`)
})

bot.hears('-3-', (ctx) => {
  ctx.reply(`Удача гдето-близко...ты рядом!!!
  продолжай искать)`)
})


bot.hears('-4-', (ctx) => {
  ctx.reply(`Главное не вешать нос! упорство 
  и огрмное желание - притягивают успех!`)
})

bot.hears('-5-', (ctx) => {
  ctx.reply(`Желаю как на свадьбе :
  гору любви! Дофига добра и миллион бабла!`)
})

bot.hears('-6-', (ctx) => {
  ctx.reply(`Представляешь все пожелания сверху остались!`)
})
bot.hears('-7-', (ctx) => {
  ctx.reply(`Я тебе желаю много новых друзей!
  Но не забывай старых! Проверенных временем ну и тобой!`)
})

bot.on('message', (ctx)=> {
  ctx.reply('я пока не могу вам ответить ...(')
})


  



bot.action('like', (ctx) => ctx.editMessageText('🎉 Спасибо ! Я старался)) 🎉'))
bot.action('dislike', (ctx) => ctx.editMessageText('okey, не получилось'))

startBot();