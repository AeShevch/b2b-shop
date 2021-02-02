<?php
/** @global CMain $APPLICATION */
?>
<section class="first-screen mb-4">
  <div class="row">
    <div class="col-3">
        <?$APPLICATION->IncludeComponent(
            "bitrix:menu",
            "menu.catalog",
            array(
                "ROOT_MENU_TYPE" => "left",
                "MENU_CACHE_TYPE" => "A",
                "MENU_CACHE_TIME" => "36000000",
                "MENU_CACHE_USE_GROUPS" => "Y",
                "MENU_THEME" => "site",
                "CACHE_SELECTED_ITEMS" => "N",
                "MENU_CACHE_GET_VARS" => array(),
                "MAX_LEVEL" => "3",
                "CHILD_MENU_TYPE" => "left",
                "USE_EXT" => "Y",
                "DELAY" => "N",
                "ALLOW_MULTI_SELECT" => "N",
            ),
            false
        );?>
    </div>
    <div class="col-9">
      <div class="row">
        <div class="col-8 mb-3">
            <?php
            // Главный слайдер
            $APPLICATION->IncludeComponent(
                "bitrix:news.list",
                "main-slider",
                [
                    "DISPLAY_DATE" => "Y",
                    "DISPLAY_NAME" => "Y",
                    "DISPLAY_PICTURE" => "Y",
                    "DISPLAY_PREVIEW_TEXT" => "Y",
                    "AJAX_MODE" => "N",
                    "IBLOCK_TYPE" => "content",
                    "IBLOCK_ID" => Site::getIblockIdByCode('slider'),
                    "NEWS_COUNT" => "20",
                    "SORT_BY1" => "ACTIVE_FROM",
                    "SORT_ORDER1" => "DESC",
                    "SORT_BY2" => "SORT",
                    "SORT_ORDER2" => "ASC",
                    "FILTER_NAME" => "",
                    "FIELD_CODE" => ["DETAIL_PICTURE"],
                    "PROPERTY_CODE" => ["LINK", ""],
                    "CHECK_DATES" => "Y",
                    "DETAIL_URL" => "",
                    "PREVIEW_TRUNCATE_LEN" => "",
                    "ACTIVE_DATE_FORMAT" => "d.m.Y",
                    "SET_TITLE" => "N",
                    "SET_BROWSER_TITLE" => "N",
                    "SET_META_KEYWORDS" => "N",
                    "SET_META_DESCRIPTION" => "N",
                    "SET_LAST_MODIFIED" => "N",
                    "INCLUDE_IBLOCK_INTO_CHAIN" => "N",
                    "ADD_SECTIONS_CHAIN" => "N",
                    "HIDE_LINK_WHEN_NO_DETAIL" => "Y",
                    "PARENT_SECTION" => "",
                    "PARENT_SECTION_CODE" => "",
                    "INCLUDE_SUBSECTIONS" => "Y",
                    "CACHE_TYPE" => "A",
                    "CACHE_TIME" => "3600",
                    "CACHE_FILTER" => "Y",
                    "CACHE_GROUPS" => "N",
                    "DISPLAY_TOP_PAGER" => "N",
                    "DISPLAY_BOTTOM_PAGER" => "N",
                    "PAGER_TITLE" => "Новости",
                    "PAGER_SHOW_ALWAYS" => "Y",
                    "PAGER_TEMPLATE" => "",
                    "PAGER_DESC_NUMBERING" => "Y",
                    "PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
                    "PAGER_SHOW_ALL" => "Y",
                    "PAGER_BASE_LINK_ENABLE" => "Y",
                    "SET_STATUS_404" => "Y",
                    "SHOW_404" => "Y",
                    "MESSAGE_404" => "",
                    "PAGER_BASE_LINK" => "",
                    "PAGER_PARAMS_NAME" => "arrPager",
                    "AJAX_OPTION_JUMP" => "N",
                    "AJAX_OPTION_STYLE" => "Y",
                    "AJAX_OPTION_HISTORY" => "N",
                    "AJAX_OPTION_ADDITIONAL" => "",
                    "MOBILE" => Site::isMobile() ? "Y" : "N",
                ]
            );
            ?>
        </div>
        <div class="col-4 mb-3">
          <article class="event-card h-100">
            <a href="" class="">
              <img src="<?= SITE_TEMPLATE_PATH ?>/images/demo/event-demo.jpg"
                   class="event-card__image"
                   alt="Превью мероприятия"
                   loading="lazy"
                   width="255" height="206">
            </a>
            <a href="" class="event-card__link">
              <h3 class="event-card__title">
                Конференция NBCOM Group Business Club
              </h3>
            </a>
            <time class="event-card__time">22 июня 12:00</time>
          </article>
        </div>
        <div class="col-12">
            <?php
            // Плашки триггеров
            require($_SERVER["DOCUMENT_ROOT"] . "/" . SITE_TEMPLATE_PATH . "/parts/triggers.php"); ?>
        </div>
      </div>
    </div>
  </div>
</section>

<?php
// Плашки триггеров 2
require($_SERVER["DOCUMENT_ROOT"] . "/" . SITE_TEMPLATE_PATH . "/parts/triggers-alt.php"); ?>

<?php
// Логотипы партнёров
require($_SERVER["DOCUMENT_ROOT"] . "/" . SITE_TEMPLATE_PATH . "/parts/partners.php"); ?>

<?php
// Готовые решения
$APPLICATION->IncludeComponent("nbc:solutions-tabs", ".default", [], false); ?>

<?php
// Лучшие предложения
$APPLICATION->IncludeComponent("bitrix:catalog.top", "best-offers", [], false); ?>

<?
// Карусель персонала
$APPLICATION->IncludeComponent("nbc:staff-carousel", ".default", [], false); ?>

<?php
// Схема работы
require($_SERVER["DOCUMENT_ROOT"] . "/" . SITE_TEMPLATE_PATH . "/parts/cashback-scheme.php"); ?>

<? $APPLICATION->IncludeComponent("nbc:subscribe", ".default", [], false); ?>
