<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>

<?php
$STAFF_LIST = [
    [
        'POSITION' => 'Менеджер',
        'NAME' => 'Евгений Ефремов',
        'INFO' => 'Руководитель направления развития В2В проектов iPort Apple Premium Reseller',
        'EMAIL' => 'efremov32@mail.ru',
        'IMAGE' => SITE_TEMPLATE_PATH . '/images/demo/person.jpg',
    ],
    [
        'POSITION' => 'Менеджер',
        'NAME' => 'Евгений Ефремов',
        'INFO' => 'Руководитель направления развития В2В проектов iPort Apple Premium Reseller',
        'EMAIL' => 'efremov32@mail.ru',
        'IMAGE' => SITE_TEMPLATE_PATH . '/images/demo/person.jpg',
    ],
];
?>

<section class="staff container_full-width mb-4">
  <div class="container">
    <h2 class="staff__title">
      Наши специалисты
    </h2>
    <p class="staff__desc">
      Индивидуальный подход и квалифицированная помощь
      к каждому клиенту
    </p>
    <div class="staff__carousel glide js-staff-carousel">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides staff__slides mb-0">
            <?php foreach ($STAFF_LIST as $person) : ?>
              <li class="glide__slide staff__slide">
                <div class="person-card">
                  <img src="<?= $person["IMAGE"] ?>"
                       class="person-card__image"
                       alt="<?= $person["POSITION"] . " " . $person["NAME"] ?>"
                       loading="lazy">

                  <div class="person-card__inner">
                      <span class="person-card__position">
                          <?= $person["POSITION"] ?>
                      </span>
                    <span class="person-card__name">
                        <?= $person["NAME"] ?>
                      </span>
                    <p class="person-card__info">
                        <?= $person["INFO"] ?>
                    </p>
                    <a href="mailTo:<?= $person["EMAIL"] ?>"
                       title="Написать специалисту"
                       class="person-card__email icon-row">
                        <svg class="icon-row__icon" width="16" height="16">
                            <use xlink:href="#icon_letter"></use>
                        </svg>
                        <span class="icon-row__text">
                          <?= $person["EMAIL"] ?>
                        </span>
                    </a>
                  </div>
                </div>
              </li>
            <?php endforeach; ?>
        </ul>
      </div>
      <div class="glide__bullets d-md-none" data-glide-el="controls[nav]">
          <?php foreach ($STAFF_LIST as $key => $item) : ?>
            <button class="glide__bullet" data-glide-dir="=<?= $key ?>"></button>
          <?php endforeach; ?>
      </div>
    </div>
  </div>
</section>
