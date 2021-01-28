<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
    die();
}

$this->setFrameMode(true);
if (!empty($arResult)): ?>
  <nav class="vertical-menu" role="navigation" aria-label="Главное меню">
    <h3 class="vertical-menu__title">О компании</h3>
    <ul class="vertical-menu__list list-reset">
        <?php foreach ($arResult as $menuItem): ?>
          <li class="vertical-menu__item">
            <a class="vertical-menu__link"
               href="<?php echo $menuItem["LINK"]; ?>"
               title="Перейти на страницу «<?php echo $menuItem["TEXT"]; ?>»"
                <?php echo(Site::isCurrentPage($menuItem["LINK"]) ? "aria-current=\"page\"" : ""); ?>
            >
                <?php echo $menuItem["TEXT"]; ?>
            </a>
          </li>
        <?php endforeach; ?>
    </ul>
  </nav>
<?php endif; ?>
