# SIA "Māju Drošība" — Landing Page

Лендинг для продажи и установки умных замков Tedee в Латвии.

## Структура

```
.
├── index.html              # Основной HTML
├── css/styles.css          # Все стили
├── js/main.js              # FAQ-аккордеон, переключатель языка
├── images/                 # Все изображения
│   ├── models/             # Tedee GO2, PRO
│   ├── accessories/        # Bridge, Keypad, Sensor, Cylinder
│   └── logos/              # Apple HomeKit, Google Home, Alexa, SmartThings
├── video/auto-unlock.mp4   # Видео автозамка для блока "Личный консьерж"
└── content/                # Тексты на LV+RU
    └── landing_copy_v3.md
```

## Локальная разработка

### Самый простой способ

Открыть `index.html` двойным кликом — браузер покажет страницу.

### С Live Server (рекомендуется)

В VS Code установить расширение **Live Server** (от Ritwick Dey),
правой кнопкой по `index.html` → **Open with Live Server**.
Страница будет автоматически перезагружаться при сохранении файлов.

### Через Python (без расширений)

```bash
cd ~/Documents/.../majudrosiba_tedee
python3 -m http.server 8000
```

Открыть http://localhost:8000

## Контакты

SIA "Māju Drošība" · Braslas iela 22b, каб. 18, Рига
+371 27 22 12 12 · info@atsledznieks.lv
Официальный реселлер Tedee в Латвии

## TODO перед публикацией

- [ ] Подставить реальные отзывы с getapro.lv в блок "Что говорят клиенты"
- [ ] Уточнить финальную цену "Полного комплекта" в блоке цен
- [ ] Заказать вычитку LV-текста носителем (€30–50)
- [ ] Добавить логотип SIA Māju Drošība (когда будет готов)
- [ ] Подключить форму к CRM/email
- [ ] Настроить Google Analytics 4 + Meta Pixel
- [ ] Финальная проверка на мобильных устройствах
