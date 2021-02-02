const Method = {
  GET: `GET`,
  PUT: `PUT`,
  POST: `POST`,
  DELETE: `DELETE`,
};

const SuccessHTTPStatusRange = {
  MIN: 200,
  MAX: 299,
};

export default class Api {
  post(payload, url, contentType = `text/plain`) {
    const headers = {
      // Emulates XMLHttpRequest to pass the Bitrix isAjaxRequest() check.
      "X-Requested-With": "XMLHttpRequest",
    };

    if (contentType) headers["Content-Type"] = contentType;

    return this._load({
      url,
      method: Method.POST,
      body: payload,
      headers: headers,
    }).then(Api.toJSON);
  }

  get(url) {
    return this._load({
      url,
    }).then(Api.toJSON);
  }

  _load({ url, method = Method.GET, body = null, headers = new Headers() }) {
    return fetch(url, {
      method,
      body,
      headers,
    })
      .then(Api.checkStatus)
      .catch(Api.catchError);
  }

  static checkStatus(response) {
    if (
      response.status < SuccessHTTPStatusRange.MIN &&
      response.status > SuccessHTTPStatusRange.MAX
    ) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    return response;
  }

  static toJSON(response) {
    return response.json();
  }

  static catchError(err) {
    throw err;
  }
}
