<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
    die();
}

$this->setFrameMode(true);
if (!empty($arResult)): ?>
  <nav class="header-top-menu" role="navigation" aria-label="Верхнее меню">
    <ul class="mb-0 header-top-menu__list list-reset">
        <?php foreach ($arResult as $menuItem): ?>
          <li class="header-top-menu__item text-center me-4">
            <a class="header-top-menu__link"
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
