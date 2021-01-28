<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
    die();
}

$this->setFrameMode(true);
if (!empty($arResult)): ?>
  <nav class="main-menu" role="navigation" aria-label="Главное меню">
    <ul class="main-menu__list list-reset">
        <?php foreach ($arResult as $menuItem): ?>
          <li class="main-menu__item text-center">
            <a class="main-menu__link"
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
