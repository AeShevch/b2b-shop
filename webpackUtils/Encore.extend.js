"use strict";

/** @const @symfony/webpack-encore */
const Encore = require("@symfony/webpack-encore");

/**
 * ”прощенное добавление в Encore JS-точек вход/выход дл€ компонента
 *
 * @param {string} name название компонента в формате demo:news.list
 *
 * доп. параметры точек вход/выход
 * @param params {{
 * 	app: {string},
 * 	out: {string},
 * 	template: {string},
 * 	siteTemplate: {string}
 * }}
 * app - название файла с логикой
 * out - билд-файл, в который все собиаретс€
 * template - шблон компонента, в котором будет лежать билд
 * siteTemplate - название шаблона сайта, если шаблон компонента не в /local/components/
 *
 * @returns {Encore}
 * @constructor
 */
Encore.BXComponentJs = (name, params = {}) => {
  // мержим дефолтные параметры со входными
  const paramsJs = Object.assign(
    {},
    {
      app: "js/app.js",
      out: "script",
      template: ".default",
      siteTemplate: false,
    },
    params
  );

  if (!paramsJs.siteTemplate) {
    paramsJs.app = `../templates/${paramsJs.template}/src/${paramsJs.app}`;
  }

  // получаем точки вход/выход
  let entry = Encore.BXComponent.getEntry(name, paramsJs);

  // добавл€ем в Encore точку входа
  return Encore.addEntry(entry.build, entry.app);
};

/**
 * ”прощенное добавление в Encore style-точек вход/выход дл€ компонента
 *
 * @param {string} name название компонента в формате demo:news.list
 *
 * доп. параметры точек вход/выход
 * @param params {{
 * 	app: {string},
 * 	out: {string},
 * 	template: {string},
 * 	siteTemplate: {string}
 * }}
 * app - название файла с логикой
 * out - билд-файл, в который все собиаретс€
 * template - шблон компонента, в котором будет лежать билд
 * siteTemplate - название шаблона сайта, если шаблон компонента не в /local/components/
 *
 * @returns {Encore}
 * @constructor
 */
Encore.BXComponentStyle = (name, params = {}) => {
  const paramsCss = Object.assign(
    {},
    {
      app: "scss/main.scss",
      template: ".default",
      siteTemplate: false,
      out: "style",
    },
    params
  );

  if (!paramsCss.siteTemplate) {
    paramsCss.app = `../templates/${paramsCss.template}/src/${paramsCss.app}`;
  }

  // if (!params.hasOwnProperty("out")) {
  //   params.out =
  //     name.replace(":", "_") + "_" + paramsCss.template.replace(".", "");
  // }

  const entry = Encore.BXComponent.getStyleEntry(name, paramsCss);
  // console.log(entry);
  return Encore.addStyleEntry(entry.build, entry.app);
};

module.exports = Encore;
