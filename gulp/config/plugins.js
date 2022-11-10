import replace from "gulp-replace"; // Пошук та заміна
import plumber from "gulp-plumber"; // Обработка помилок
import notify from "gulp-notify"; // Сповіщення (підказки)
import browsersync from "browser-sync"; // Локальний сервер
import newer from "gulp-newer"; // Перевірка оновлення
import ifPlugin from "gulp-if"; // Условне вітвлення

// Експорт об'єкта
export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
  newer: newer,
  if: ifPlugin,
};
