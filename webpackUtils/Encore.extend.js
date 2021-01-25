"use strict";

/** @const @symfony/webpack-encore */
const Encore = require("@symfony/webpack-encore");

/**
 * ���������� ���������� � Encore JS-����� ����/����� ��� ����������
 *
 * @param {string} name �������� ���������� � ������� demo:news.list
 *
 * ���. ��������� ����� ����/�����
 * @param params {{
 * 	app: {string},
 * 	out: {string},
 * 	template: {string},
 * 	siteTemplate: {string}
 * }}
 * app - �������� ����� � �������
 * out - ����-����, � ������� ��� ����������
 * template - ����� ����������, � ������� ����� ������ ����
 * siteTemplate - �������� ������� �����, ���� ������ ���������� �� � /local/components/demo
 *
 * @returns {Encore}
 * @constructor
 */
Encore.BXComponentJs = (name, params = {}) => {
  // ������ ��������� ��������� �� ��������
  const paramsJs = Object.assign(
    {},
    { app: "app.js", out: "script", template: ".default", siteTemplate: false },
    params
  );

  // �������� ����� ����/�����
  let entry = Encore.BXComponent.getEntry(name, paramsJs);

  // ��������� � Encore ����� �����
  return Encore.addEntry(entry.build, entry.app);
};

/**
 * ���������� ���������� � Encore style-����� ����/����� ��� ����������
 *
 * @param {string} name �������� ���������� � ������� demo:news.list
 *
 * ���. ��������� ����� ����/�����
 * @param params {{
 * 	app: {string},
 * 	out: {string},
 * 	template: {string},
 * 	siteTemplate: {string}
 * }}
 * app - �������� ����� � �������
 * out - ����-����, � ������� ��� ����������
 * template - ����� ����������, � ������� ����� ������ ����
 * siteTemplate - �������� ������� �����, ���� ������ ���������� �� � /local/components/demo
 *
 * @returns {Encore}
 * @constructor
 */
Encore.BXComponentStyle = (name, params = {}) => {
  const paramsCss = {
    app: "../templates/.default/scss/main.scss",
    template: ".default",
    siteTemplate: false,
    out: 'style'
  };

  // if (!params.hasOwnProperty("out")) {
  //   params.out =
  //     name.replace(":", "_") + "_" + paramsCss.template.replace(".", "");
  // }

  const entry = Encore.BXComponent.getStyleEntry(
    name,
    Object.assign({}, paramsCss, params)
  );
  return Encore.addStyleEntry(entry.build, entry.app);
};

module.exports = Encore;
