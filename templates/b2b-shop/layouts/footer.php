<footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-5 footer__col mb-4">
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
                          "TITLE" => "О компании",
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
                          "TITLE" => "Услуги",
                          "ALLOW_MULTI_SELECT" => "N",
                          "DELAY" => "N",
                          "MAX_LEVEL" => "1",
                          "MENU_CACHE_TIME" => "3600",
                          "MENU_CACHE_TYPE" => "A",
                          "MENU_CACHE_USE_GROUPS" => "Y",
                          "ROOT_MENU_TYPE" => "personal",
                          "CHILD_MENU_TYPE" => "personal",
                          "USE_EXT" => "N",
                      ],
                      false
                  );
                  ?>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 footer__col mb-4">
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
              // меню Футер 3
              $APPLICATION->IncludeComponent(
                  "bitrix:menu",
                  "menu.vertical",
                  [
                      "TITLE" => "Покупателям",
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
        <div class="col-3 footer__col ps-lg-0 mb-4">
          <div class="footer__header d-flex align-items-center">
            <img src="<?= SITE_TEMPLATE_PATH ?>/images/showroom.svg"
                 class="me-2"
                 alt="Лого Шоурум"
                 loading="lazy"
                 width="53" height="58">
            <span>Шоурум</span>
          </div>
          <div class="footer__contacts footer-contacts">
            <dl class="footer-contacts__social social row">
              <dt class="col-5">
                <span class="social__title">Оставайтесь на связи</span>
              </dt>
              <dd class="col p-0">
                <a class="social__link" href=""
                   title="Перейти в наш «Telegram»">
                  <img src="<?= SITE_TEMPLATE_PATH ?>/images/social/telegram.svg"
                       class="social__icon"
                       alt="Лого Telegram"
                       loading="lazy"
                       width="24" height="24"">
                </a>
              </dd>
              <dd class="col p-0">
                <a class="social__link" href=""
                   title="Перейти в наш «Whatsapp»">
                  <img src="<?= SITE_TEMPLATE_PATH ?>/images/social/whatsapp.svg"
                       class="social__icon"
                       alt="Лого Whatsapp"
                       loading="lazy"
                       width="24" height="24"">
                </a>
              </dd>
              <dd class="col p-0">
                <a class="social__link" href=""
                   title="Перейти в наш «Viber»">
                  <img src="<?= SITE_TEMPLATE_PATH ?>/images/social/viber.svg"
                       class="social__icon"
                       alt="Лого Viber"
                       loading="lazy"
                       width="24" height="24"">
                </a>
              </dd>
            </dl>
            <div class="footer-contacts__phone">
              <span>Контакты</span>
              <a href="tel:88007707999" class="icon-row" title="Позвонить нам">
                <svg class="icon-row__icon" width="24" height="24" aria-hidden="true">
                  <use xlink:href="#icon_phone"></use>
                </svg>
                <span class="icon-row__text">
                  8-800-77-07-999
                </span>
              </a>
              <span class="footer-contacts__time">(с 03:00 до 22:00)</span>
            </div>
          </div>
          <form class="footer__subscribe mini-subscribe" name="FOOTER-SUBSCRIBE">
            <label class="mini-subscribe__label" for="mini-subscribe">
              Подпишитесь на наши новости
            </label>
            <div class="mini-subscribe__inner">
              <input type="email" id="mini-subscribe" name="EMAIL"
                     required
                     placeholder="Ваш адрес e-mail"
                     class="mini-subscribe__input form-control">
              <button class="mini-subscribe__button" type="submit" aria-label="Подписаться на новости">
                <svg width="16" height="16">
                    <use xlink:href="#icon_arrow"></use>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
      <dl class="row align-items-center footer__projects mb-0">
        <dt class="col-2">Наши проекты:</dt>
        <dd class="col-2 text-center m-0">
          <img src="<?= SITE_TEMPLATE_PATH ?>/images/projects-logos/iPort.png"
               alt="Логотип компании «iPort»"
               loading="lazy"
               width="137" height="28">
        </dd>
        <dd class="col-2 text-center m-0">
          <img src="<?= SITE_TEMPLATE_PATH ?>/images/projects-logos/NB.png"
               alt="Логотип компании «iPort»"
               loading="lazy"
               width="137" height="28">
        </dd>
        <dd class="col-2 text-center m-0">
          <img src="<?= SITE_TEMPLATE_PATH ?>/images/projects-logos/Sony.png"
               alt="Логотип компании «iPort»"
               loading="lazy"
               width="137" height="28">
        </dd>
        <dd class="col-2 text-center m-0">
          <img src="<?= SITE_TEMPLATE_PATH ?>/images/projects-logos/Samsung.png"
               alt="Логотип компании «iPort»"
               loading="lazy"
               width="137" height="28">
        </dd>
        <dd class="col-2 text-center m-0">
          <img src="<?= SITE_TEMPLATE_PATH ?>/images/projects-logos/Micro.png"
               alt="Логотип компании «iPort»"
               loading="lazy"
               width="137" height="28">
        </dd>
      </dl>
    </div>
</footer>
