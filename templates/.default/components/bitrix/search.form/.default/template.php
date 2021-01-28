<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */

$this->setFrameMode(true);
?>

<form class="search-form" name="search-form" action="<?= $arResult["FORM_ACTION"]; ?>">
  <input class="search-form__input form-control" type="search"
         name="q" placeholder="Найти"
         aria-label="Поиск по сайту">
  <button class="search-form__button" type="submit"
          name="s" aria-label="Найти">
    <svg width="24" height="24" aria-hidden="true">
      <use xlink:href="#icon_search"></use>
    </svg>
  </button>
</form>
