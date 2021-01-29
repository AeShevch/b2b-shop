<?php
/** @var array $arResult */
/** @var array $arParams */

if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
    die();
}
$this->setFrameMode(true);
?>
<?php if (!empty($arResult["ITEMS"])) : ?>
  <div class="glide main-slider js-main-slider">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides mb-0">
          <?php foreach ($arResult["ITEMS"] as $key => $item) : ?>
            <li class="glide__slide">
              <a href="<?php echo $item["PROPERTIES"]["LINK"]["VALUE"] ?>"
                 class="carousel-item__link"
                 target="<?php echo ($item["PROPERTIES"]["IS_BLANK"]["VALUE_XML_ID"]) ? '_blank' : ''; ?>">
                  <?php if ($arParams["MOBILE"] == "N"): ?>
                    <img src="<?php echo $item['DETAIL_PICTURE']['SRC']; ?>"
                         alt="<?php echo $item['DETAIL_PICTURE']['ALT']; ?>">
                  <?php else: ?>
                    <img src="<?php echo $item['PREVIEW_PICTURE']['SRC']; ?>"
                         alt="<?php echo $item['PREVIEW_PICTURE']['ALT']; ?>">
                  <?php endif; ?>
              </a>
            </li>
          <?php endforeach; ?>
      </ul>
    </div>
    <div class="glide__bullets" data-glide-el="controls[nav]">
        <?php foreach ($arResult["ITEMS"] as $key => $item) : ?>
          <button class="glide__bullet" data-glide-dir="=<?= $key ?>"></button>
        <?php endforeach; ?>
    </div>
  </div>
<?php endif; ?>
