// Для заданої сторінки знайдіть всі <h2> з класом head, 
// зробіть для них зелений колір фону
// потім серед знайдених елементів знайдіть елементи з класом inner 
// і поставте їм розмір шрифту 35px.

// Завдання виділене вставкою Task1

const head = $(".head");
head.css("background-color", "green");
const headInner = $(".inner");
headInner.css("font-size", "35px");