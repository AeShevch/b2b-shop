<?php
/** @global CMain $APPLICATION */
?>
<header class="header">
  <div class="header__top">
    <div class="container">
      <div class="row">
        <div class="col-6 d-flex">
            <?php
            // Компонент «Выбор города»
            $APPLICATION->IncludeComponent("nbc:city-select", ".default"); ?>

            <?php
            // Верхнее меню
            $APPLICATION->IncludeComponent(
                "bitrix:menu",
                "menu.header-top",
                [
                    "ALLOW_MULTI_SELECT" => "N",
                    "DELAY" => "N",
                    "MAX_LEVEL" => "1",
                    "MENU_CACHE_TIME" => "3600",
                    "MENU_CACHE_TYPE" => "A",
                    "MENU_CACHE_USE_GROUPS" => "Y",
                    "ROOT_MENU_TYPE" => "top",
                    "CHILD_MENU_TYPE" => "top",
                    "USE_EXT" => "N",
                ],
                false
            );
            ?>
        </div>

        <div class="col-6">
          <nav class="header__contacts">
            <a href="mailTo:corporate@nbcom.ru" class="icon-row"
               title="Написать нам на email">
              <svg class="icon-row__icon"
                   width="16" height="16"
                   aria-hidden="true">
                <use xlink:href="#icon_letter"></use>
              </svg>
              <span class="icon-row__text">
                      corporate@nbcom.ru
                    </span>
            </a>
            <a href="tel:88123183836" class="icon-row"
               title="Позвонить нам">
              <svg class="icon-row__icon"
                   width="16" height="16"
                   aria-hidden="true">
                <use xlink:href="#icon_phone"></use>
              </svg>
              <span class="icon-row__text">
                      8 (812) 318-38-36
                    </span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <div class="header__main">
    <div class="container">
      <div class="row">
        <div class="col-2">
          <div class="logo">
            <a href="/"
               class="logo__link"
               title="Перейти на главную страницу">
              <img src="<?= SITE_TEMPLATE_PATH ?>/images/logo.svg"
                   class="logo__image"
                   alt="Логотип NBCom Group"
                   loading="lazy"
                   width="130" height="36">
            </a>
          </div>
        </div>
        <div class="col-5">
            <?php
            $APPLICATION->IncludeComponent(
                "bitrix:search.form",
                ".default",
                [
                    "PAGE" => "#SITE_DIR#search/index.php", // Страница выдачи результатов поиска (доступен макрос #SITE_DIR#)
                    "USE_SUGGEST" => "N",                   // Показывать подсказку с поисковыми фразами
                ],
                false
            );
            ?>
        </div>
        <div class="col-5">
          <div class="row">
            <div class="col">
              <a href="" class="user-link user-link_active" title="Перейти в раздел «Вход для В2В»">
                <svg class="user-link__icon" width="16" height="16">
                  <use xlink:href="#icon_user"></use>
                </svg>
                <span class="user-link__title">
                  Вход для В2В
                </span>
              </a>
            </div>
            <div class="col">
              <a href="" class="user-link" title="Перейти в раздел «Поделиться»">
                <svg class="user-link__icon" width="16" height="16">
                  <use xlink:href="#icon_share"></use>
                </svg>
                <span class="user-link__title">
                  Поделиться
                </span>
              </a>
            </div>
            <div class="col">
              <a href="" class="user-link" title="Перейти в раздел «Сравнение»">
                <svg class="user-link__icon" width="16" height="16">
                  <use xlink:href="#icon_compare"></use>
                </svg>
                <span class="user-link__title">
                  Сравнение
                </span>
              </a>
            </div>
            <div class="col">
              <a href="" class="user-link" title="Перейти в раздел «Избранное»">
                <svg class="user-link__icon" width="16" height="16">
                  <use xlink:href="#icon_like"></use>
                </svg>
                <span class="user-link__title">
                  Избранное
                </span>
              </a>
            </div>
            <div class="col pe-0">
              <a href="" class="user-link" title="Перейти в раздел «Корзина»">
                <svg class="user-link__icon" width="16" height="16">
                  <use xlink:href="#icon_cart"></use>
                </svg>
                <span class="user-link__title">
                  Корзина
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="header__bottom">
    <div class="container">
      <div class="row">
        <div class="col-2">
          <button class="btn button button_with-icon h-100"
                  aria-haspopup="true"
                  aria-expanded="false"
                  id="dropdownMenuButton"
                  aria-label="Открыть меню категорий каталога"
                  type="button">
            <svg width="24" height="24" aria-hidden="true">
                <use xlink:href="#icon_burger"></use>
            </svg>
            <span>Каталог</span>
          </button>
          <div class="" aria-labelledby="dropdownMenuButton"></div>
        </div>
        <div class="col-8 pe-0">
            <div class="border-top">
                <?php
                // Главное меню
                $APPLICATION->IncludeComponent(
                    "bitrix:menu",
                    "menu.main",
                    [
                        "ALLOW_MULTI_SELECT" => "N",
                        "DELAY" => "N",
                        "MAX_LEVEL" => "1",
                        "MENU_CACHE_TIME" => "3600",
                        "MENU_CACHE_TYPE" => "A",
                        "MENU_CACHE_USE_GROUPS" => "Y",
                        "ROOT_MENU_TYPE" => "bottom",
                        "CHILD_MENU_TYPE" => "bottom",
                        "USE_EXT" => "N",
                    ],
                    false
                );
                ?>
            </div>
        </div>
        <div class="col-2 ps-0">
          <div class="border-top d-flex align-items-center justify-content-end h-100">
            <a href="" class="button button_outline"
               title="Перейти в интернет-магазин для физических лиц"
               rel="noopener" target="_blank">
              <span>Сайт для физ.лиц</span>

              <svg width="16" height="16">
                <use xlink:href="#icon_arrow"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
