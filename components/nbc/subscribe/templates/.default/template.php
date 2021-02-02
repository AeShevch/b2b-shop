<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>

<?php
$AJAX_URL = SITE_TEMPLATE_PATH . "/src/js/mock/subscribe-request.json";
?>

<section class="subscribe container_full-width">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-6">
                <h2 class="subscribe__title mb-0" id="subscribe-title">
                    Подпишитесь на наши новости и будь в курсе событий
                </h2>
            </div>
            <div class="col-6">
                <form action="<?= $AJAX_URL ?>"
                      aria-label="Подписка на рассылку"
                      aria-describedby="subscribe-title"
                      class="subscribe__form row mb-0"
                      name="subscribe">
                    <div class="col-8">
                        <input aria-label="Ваш Email"
                               placeholder="Ваш адрес e-mail"
                               required
                               name="EMAIL"
                               type="email"
                               class="form-control subscribe__input w-100">
                    </div>
                    <div class="col-4">
                        <button type="submit" class="subscribe__submit button w-100">
                            Отправить
                        </button>
                    </div>
                  <div class="col-12">
                    <div class="alert js-subscribe-alert mt-2" hidden role="alert"></div>
                  </div>
                </form>
            </div>
        </div>
    </div>
</section>
