<?php if (!empty($arResult['ITEMS'])) : ?>
  <div class="catalog-top container_full-width mb-4">
    <div class="container">
      <h2 class="catalog-top__title">Лучшие предложения</h2>
      <div class="row" role="list">
          <?php foreach ($arResult['ITEMS'] as $arItem): ?>
            <div class="col-3 mb-2" role="listitem">
              <a href="<?= $arItem["DETAIL_PAGE_URL"] ?>"
                 title="Перейти к товару «<?= $arItem["NAME"] ?>»"
                 class="catalog-top__item catalog-top-item">
                <img src="<?= !empty($arItem['PREVIEW_PICTURE']) ? $arItem['PREVIEW_PICTURE']['SRC'] : $arItem['DETAIL_PICTURE']['SRC'] ?>"
                     class="catalog-top-item__image"
                     alt="<?= $arItem["NAME"] ?>"
                     loading="lazy"
                     width="" height="">
                <span class="catalog-top-item__title">
                  <?= $arItem["NAME"] ?>
                </span>
              </a>
            </div>
          <?php endforeach; ?>
      </div>
    </div>
  </div>
<?php endif; ?>
