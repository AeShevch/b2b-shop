<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
{
	die();
}
// Какие файлы подключать, работает ли в шаблоне?
return [
	'js' => 'js/bundle.js',
	'rel' => [
		'main.polyfill.core',
	],
	'skip_core' => true,
];
