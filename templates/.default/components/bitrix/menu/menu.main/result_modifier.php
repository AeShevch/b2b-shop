<?php
    $sections = [];
    foreach ($arResult as $key => $items) {
        if ($items["DEPTH_LEVEL"] == 2 && $items["PARAMS"]["FROM_IBLOCK"] == 1) {
            $sections[] = $items;
            unset($arResult[$key]);
        }
    }
    foreach ($arResult as &$items) {
        if ($items["IS_PARENT"] == 1) {
            $items["SECTIONS"] = $sections;
        }
    }
