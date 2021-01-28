<footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-5 d-flex align-items-end footer__col">
          <div class="footer__header d-flex align-items-center">
            <svg width="166" height="48">
              <use xlink:href="#icon_logo-alt"></use>
            </svg>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="footer__nav">
                  <?php
                  // меню Футер 1
                  $APPLICATION->IncludeComponent(
                      "bitrix:menu",
                      "menu.vertical",
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
            <div class="col-6">
              <div class="footer__nav">
                  <?php
                  // меню Футер 2
                  $APPLICATION->IncludeComponent(
                      "bitrix:menu",
                      "menu.vertical",
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
          </div>
        </div>
        <div class="col-4 d-flex align-items-end footer__col">
          <div class="footer__header d-flex align-items-center">
            <img src="<?= SITE_TEMPLATE_PATH ?>/images/showroom.svg"
                 class="me-2"
                 alt="Клубная карта"
                 loading="lazy"
                 width="53" height="58">
            <span>Club</span>
          </div>
          <div class="footer__nav">
              <?php
              // меню Футер 2
              $APPLICATION->IncludeComponent(
                  "bitrix:menu",
                  "menu.vertical",
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
        <div class="col-3 d-flex align-items-end footer__col">
          <div class="footer__header d-flex align-items-center">
            <img src="<?= SITE_TEMPLATE_PATH ?>/images/showroom.svg"
                 class="me-2"
                 alt="Лого Шоурум"
                 loading="lazy"
                 width="53" height="58">
            <span>Шоурум</span>
          </div>
          <div class="footer__nav">
              <?php
              // меню Футер 2
              $APPLICATION->IncludeComponent(
                  "bitrix:menu",
                  "menu.vertical",
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
      </div>
    </div>
</footer>
