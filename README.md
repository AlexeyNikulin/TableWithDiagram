1. Для запуска приложения используйте команду "npm run dev". 
2. В приложении в качестве бэкенда использую json-server.  По этому если использовать команду  "npm start", запустится приложение без сервера.  В этом случае нужно дополнительно прописать "yarn server" (npm run server).
3. В приложении есть 2 страницы. Первая - "Главная", Вторая - "Диаграмма".
4. На главной странице есть таблица с данными. Данные прогружаются с тестовой базы данных "db.json". Для добавления данных в таблицу есть кнопка "Добавить инструмент".  Нажав на нее, выплывет модальное окно с полями "Инструмент (ценная бумага)", "Стоимость". Нажимаете кнопку "Создать строку" и данные записываются в базу данных и сразу идет загрузка новых данных в таблицу. Дата выставляется автоматически в таблице (дата текущая на сегодняшний день). Также есть возможность редактировать таблицу в inline режиме, т.е. без модального окна, путем редактирования данных непосредственно в таблице. Но оно не сохраняется в базе данных так, как нет бэкенда, который позволил бы редактировать текущие данные в базе, поэтому при перезагрузке все изменения которые вы производили в inline режиме не сохранятся.
5. На второй станице реализован график зависимости стоимости инструментов по датам: по оси абсцисс - даты, по оси ординат - стоимость. График автоматически обновляет данные в зависимости от состояния таблицы. Если даты совподают, то высчитывается средняя стоимость всех инструментов одинаковой даты и в качестве данных из всех одинаковых дат приходит одна дата со средней стоимостью.
6. Также данные записываются в localStorage, чтобы при переходе со страницы графика на главную не прогружались заного данные таблицы
