import Api from "../../../../../../../templates/b2b-shop/src/js/api/api";

const api = new Api();
const DEFAULT_ERROR_MESSAGE = `Что-то пошло не так, повторите вашу попытку позже.`;
const STATUS_TO_ALERT_CLASS = {
  200: `alert-success`,
  400: `alert-danger`,
};

export default class SubscribeForm {
  constructor(formName) {
    this._element = document.forms[formName];

    if (this._element) {
      this._requestUrl = this._element.action;
      this._alertElement = this._element.querySelector(`.js-subscribe-alert`);
    }

    this._onSubmit = this._onSubmit.bind(this);
  }

  _onSubmit(evt) {
    evt.preventDefault();

    const formData = new FormData(this._element);
    api
      .post(formData, this._requestUrl, ``)
      .then((response) => {
        const { status, message } = response;

        if (status === 200) {
          try {
            window.mindboxFooterSubscribe(formData.get(`EMAIL`));
          } catch (e) {
            throw new Error(`Вероятно, mindbox не подключен – ${e}`);
          }
        }

        this._showMessage(message, status);
      })
      .catch((e) => {
        this._showMessage(DEFAULT_ERROR_MESSAGE, 400);
        throw new Error(e);
      });
  }

  _showMessage(message, status) {
    this._alertElement.classList.remove(
      ...Object.values(STATUS_TO_ALERT_CLASS)
    );

    if (Object.keys(STATUS_TO_ALERT_CLASS).includes(status.toString())) {
      this._alertElement.classList.add(STATUS_TO_ALERT_CLASS[status]);
    }

    this._alertElement.innerHTML = message;

    this._alertElement.removeAttribute(`hidden`);
  }

  _setHandlers() {
    this._element.addEventListener(`submit`, this._onSubmit);
  }

  init() {
    if (this._element) {
      this._setHandlers();
    }
  }
}
