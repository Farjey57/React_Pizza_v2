# Быстрый старт

`npx create-react-app my-app`:
- npx исполняет сразу программу, указанную дальше;
- create-react-app название программы, которая запускается для создания директории. Она не хранится на диске, а сразу удаляется после исполнения
- my-app название проекта

>Вам не нужно устанавливать или настраивать такие инструменты, как Webpack или Babel. Они предварительно настроены и скрыты, чтобы вы могли сосредоточиться на коде.

`npm init react-app my-app` - тоже самое

# Структура проекта

### READMY.md

Инструкция как заупскать проект, описание команд create react app c ссылками

### package.json

Настройка проекта, его сборки.

### public

Исходный проект, заготовка.

- favicon.ico - фавиконка
- index.html - скелет проекта
  - `<div class="root"></div>` - сюда будет вставляться реактовский код

### node_modules

Библиотеки npm, для работы сборки (Webpack, React и т.д.)

### src

- setupTest - проверка приложения, тесты
- reportWebVitals - очень редко используется, можно убрать
- App.test.js - тоже можно убрать
- App.css - стартовая стилизация реактовского приложения
- index.js - основной скрипт приложения

#