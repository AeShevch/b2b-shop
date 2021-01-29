<?php if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
    die();
}
    $this->setFrameMode(true);

?>
<section id="mainSlider" class="carousel slide" data-ride="carousel">
    <svg style="display: none" hidden="">
        <symbol id="icon_arrow" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 17l8-8-8-8" stroke="#069149" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </symbol>
    </svg>
    <div class="carousel-inner">
        <?php foreach ($arResult["ITEMS"] as $key => $item) : ?>
            <div class="carousel-item <?php echo ($key == 0) ? 'active' : ''; ?>">
                <div class="carousel-item__inner">
                    <?php if ($item["PROPERTIES"]["LINK"]["VALUE"]): ?>
                    <a href="<?php echo $item["PROPERTIES"]["LINK"]["VALUE"] ?>"
                       class="carousel-item__link"
                       target="<?php echo ($item["PROPERTIES"]["IS_BLANK"]["VALUE_XML_ID"]) ? '_blank' : ''; ?>">
                        <?php endif; ?>
                        <?php if ($arParams["MOBILE"] == "N"): ?>
                            <img src="<?php echo $item['DETAIL_PICTURE']['SRC']; ?>" alt="<?php echo $item['DETAIL_PICTURE']['ALT']; ?>">
                        <?php else: ?>
                            <img src="<?php echo $item['PREVIEW_PICTURE']['SRC']; ?>" alt="<?php echo $item['PREVIEW_PICTURE']['ALT']; ?>">
                        <?php endif; ?>
                        <?php if ($item["PROPERTIES"]["LINK"]["VALUE"]): ?>
                    </a>
                <?php endif; ?>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
    <a class="carousel-control-prev" href="#mainSlider" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true">
            <svg width="10" height="18">
                <use xlink:href="#icon_arrow"></use>
            </svg>
        </span>
        <span class="sr-only">Предыдущий слайд</span>
    </a>
    <a class="carousel-control-next" href="#mainSlider" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true">
            <svg width="10" height="18">
                <use xlink:href="#icon_arrow"></use>
            </svg>
        </span>
        <span class="sr-only">Следующий слайд</span>
    </a>
</section>
