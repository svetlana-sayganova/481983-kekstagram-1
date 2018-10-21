"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var URL = "https://js.dump.academy/kekstagram";
var SUCCESS_STATUS = 200;
var REQUEST_TIMEOUT = 5000;

var ErrorStatus = {
  400: "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441",
  401: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043D\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D",
  404: "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0430 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",
  500: "\u0412\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u044F\u044F \u043E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"
};

/**
 * Возвращает новый объект XMLHttpRequest
 *
 * @param  {function} onSuccess Коллбэк, срабатывает при при успешном выполнении запроса
 * @param  {function} onError Коллбэк, срабатывает при при неуспешном выполнении запроса
 * @return {XMLHttpRequest} Объект XMLHttpRequest
 */
var createRequest = function createRequest(onSuccess, onError) {
  var xhr = new XMLHttpRequest();

  xhr.responseType = "json";

  xhr.addEventListener("load", function () {
    if (xhr.status === SUCCESS_STATUS) {
      onSuccess(xhr.response);
    } else {
      onError(xhr.status + ": " + ErrorStatus[xhr.status]);
    }
  });

  xhr.addEventListener("error", function () {
    return onError("\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F");
  });

  xhr.addEventListener("timeout", function () {
    return onError("\u0417\u0430\u043F\u0440\u043E\u0441 \u043D\u0435 \u0443\u0441\u043F\u0435\u043B \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C\u0441\u044F \u0437\u0430 " + xhr.timeout + " \u043C\u0441");
  });

  xhr.timeout = REQUEST_TIMEOUT;

  return xhr;
};

/**
* Получает данные с сервера
*
* @param  {function} onSuccess Коллбэк, срабатывает при при успешном выполнении запроса
* @param  {function} onError Коллбэк, срабатывает при при неуспешном выполнении запроса
*/
var load = exports.load = function load(onSuccess, onError) {
  var xhr = createRequest(onSuccess, onError);

  xhr.open("GET", URL + "/data");
  xhr.send();
};

/**
* Отправляет данные data на сервер
*
* @param  {*} data
* @param  {function} onSuccess Коллбэк, срабатывает при при успешной отправке данных
* @param  {function} onError Коллбэк, срабатывает при при неуспешной отправке данных
*/
var upload = exports.upload = function upload(data, onSuccess, onError) {
  var xhr = createRequest(onSuccess, onError);

  xhr.open("POST", URL);
  xhr.send(data);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzL2JhY2tlbmQuanMiXSwibmFtZXMiOlsiVVJMIiwiU1VDQ0VTU19TVEFUVVMiLCJSRVFVRVNUX1RJTUVPVVQiLCJFcnJvclN0YXR1cyIsImNyZWF0ZVJlcXVlc3QiLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJyZXNwb25zZVR5cGUiLCJhZGRFdmVudExpc3RlbmVyIiwic3RhdHVzIiwicmVzcG9uc2UiLCJ0aW1lb3V0IiwibG9hZCIsIm9wZW4iLCJzZW5kIiwidXBsb2FkIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsSUFBTUEsMENBQU47QUFDQSxJQUFNQyxpQkFBaUIsR0FBdkI7QUFDQSxJQUFNQyxrQkFBa0IsSUFBeEI7O0FBRUEsSUFBTUMsY0FBYztBQUNsQiw4RkFEa0I7QUFFbEIsaUtBRmtCO0FBR2xCLHFHQUhrQjtBQUlsQjtBQUprQixDQUFwQjs7QUFPQTs7Ozs7OztBQU9BLElBQU1DLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ0MsU0FBRCxFQUFZQyxPQUFaLEVBQXdCO0FBQzVDLE1BQU1DLE1BQU0sSUFBSUMsY0FBSixFQUFaOztBQUVBRCxNQUFJRSxZQUFKOztBQUVBRixNQUFJRyxnQkFBSixTQUE2QixZQUFNO0FBQ2pDLFFBQUlILElBQUlJLE1BQUosS0FBZVYsY0FBbkIsRUFBbUM7QUFDakNJLGdCQUFVRSxJQUFJSyxRQUFkO0FBQ0QsS0FGRCxNQUVPO0FBQ0xOLGNBQVdDLElBQUlJLE1BQWYsVUFBMEJSLFlBQVlJLElBQUlJLE1BQWhCLENBQTFCO0FBQ0Q7QUFDRixHQU5EOztBQVFBSixNQUFJRyxnQkFBSixVQUE4QjtBQUFBLFdBQzVCSixtS0FENEI7QUFBQSxHQUE5Qjs7QUFHQUMsTUFBSUcsZ0JBQUosWUFBZ0M7QUFBQSxXQUM5QkosOEtBQTBDQyxJQUFJTSxPQUE5QyxtQkFEOEI7QUFBQSxHQUFoQzs7QUFHQU4sTUFBSU0sT0FBSixHQUFjWCxlQUFkOztBQUVBLFNBQU9LLEdBQVA7QUFDRCxDQXRCRDs7QUF3Qk87Ozs7OztBQU1QLElBQU1PLHNCQUFPLFNBQVBBLElBQU8sQ0FBQ1QsU0FBRCxFQUFZQyxPQUFaLEVBQXdCO0FBQ25DLE1BQU1DLE1BQU1ILGNBQWNDLFNBQWQsRUFBeUJDLE9BQXpCLENBQVo7O0FBRUFDLE1BQUlRLElBQUosUUFBbUJmLEdBQW5CO0FBQ0FPLE1BQUlTLElBQUo7QUFDRCxDQUxEOztBQU9POzs7Ozs7O0FBT1AsSUFBTUMsMEJBQVMsU0FBVEEsTUFBUyxDQUFDQyxJQUFELEVBQU9iLFNBQVAsRUFBa0JDLE9BQWxCLEVBQThCO0FBQzNDLE1BQU1DLE1BQU1ILGNBQWNDLFNBQWQsRUFBeUJDLE9BQXpCLENBQVo7O0FBRUFDLE1BQUlRLElBQUosU0FBaUJmLEdBQWpCO0FBQ0FPLE1BQUlTLElBQUosQ0FBU0UsSUFBVDtBQUNELENBTEQiLCJmaWxlIjoiYmFja2VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgVVJMID0gYGh0dHBzOi8vanMuZHVtcC5hY2FkZW15L2tla3N0YWdyYW1gO1xuY29uc3QgU1VDQ0VTU19TVEFUVVMgPSAyMDA7XG5jb25zdCBSRVFVRVNUX1RJTUVPVVQgPSA1MDAwO1xuXG5jb25zdCBFcnJvclN0YXR1cyA9IHtcbiAgNDAwOiBg0J3QtdCy0LXRgNC90YvQuSDQt9Cw0L/RgNC+0YFgLFxuICA0MDE6IGDQn9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0L3QtSDQsNCy0YLQvtGA0LjQt9C+0LLQsNC9YCxcbiAgNDA0OiBg0J3QuNGH0LXQs9C+INC90LAg0L3QsNC50LTQtdC90L5gLFxuICA1MDA6IGDQktC90YPRgtGA0LXQvdC90Y/RjyDQvtGI0LjQsdC60LAg0YHQtdGA0LLQtdGA0LBgXG59O1xuXG4vKipcbiAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINC90L7QstGL0Lkg0L7QsdGK0LXQutGCIFhNTEh0dHBSZXF1ZXN0XG4gKlxuICogQHBhcmFtICB7ZnVuY3Rpb259IG9uU3VjY2VzcyDQmtC+0LvQu9Cx0Y3Quiwg0YHRgNCw0LHQsNGC0YvQstCw0LXRgiDQv9GA0Lgg0L/RgNC4INGD0YHQv9C10YjQvdC+0Lwg0LLRi9C/0L7Qu9C90LXQvdC40Lgg0LfQsNC/0YDQvtGB0LBcbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBvbkVycm9yINCa0L7Qu9C70LHRjdC6LCDRgdGA0LDQsdCw0YLRi9Cy0LDQtdGCINC/0YDQuCDQv9GA0Lgg0L3QtdGD0YHQv9C10YjQvdC+0Lwg0LLRi9C/0L7Qu9C90LXQvdC40Lgg0LfQsNC/0YDQvtGB0LBcbiAqIEByZXR1cm4ge1hNTEh0dHBSZXF1ZXN0fSDQntCx0YrQtdC60YIgWE1MSHR0cFJlcXVlc3RcbiAqL1xuY29uc3QgY3JlYXRlUmVxdWVzdCA9IChvblN1Y2Nlc3MsIG9uRXJyb3IpID0+IHtcbiAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgeGhyLnJlc3BvbnNlVHlwZSA9IGBqc29uYDtcblxuICB4aHIuYWRkRXZlbnRMaXN0ZW5lcihgbG9hZGAsICgpID0+IHtcbiAgICBpZiAoeGhyLnN0YXR1cyA9PT0gU1VDQ0VTU19TVEFUVVMpIHtcbiAgICAgIG9uU3VjY2Vzcyh4aHIucmVzcG9uc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvbkVycm9yKGAke3hoci5zdGF0dXN9OiAke0Vycm9yU3RhdHVzW3hoci5zdGF0dXNdfWApO1xuICAgIH1cbiAgfSk7XG5cbiAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoYGVycm9yYCwgKCkgPT5cbiAgICBvbkVycm9yKGDQn9GA0L7QuNC30L7RiNC70LAg0L7RiNC40LHQutCwINGB0L7QtdC00LjQvdC10L3QuNGPYCkpO1xuXG4gIHhoci5hZGRFdmVudExpc3RlbmVyKGB0aW1lb3V0YCwgKCkgPT5cbiAgICBvbkVycm9yKGDQl9Cw0L/RgNC+0YEg0L3QtSDRg9GB0L/QtdC7INCy0YvQv9C+0LvQvdC40YLRjNGB0Y8g0LfQsCAke3hoci50aW1lb3V0fSDQvNGBYCkpO1xuXG4gIHhoci50aW1lb3V0ID0gUkVRVUVTVF9USU1FT1VUO1xuXG4gIHJldHVybiB4aHI7XG59O1xuXG5leHBvcnQgLyoqXG4gKiDQn9C+0LvRg9GH0LDQtdGCINC00LDQvdC90YvQtSDRgSDRgdC10YDQstC10YDQsFxuICpcbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBvblN1Y2Nlc3Mg0JrQvtC70LvQsdGN0LosINGB0YDQsNCx0LDRgtGL0LLQsNC10YIg0L/RgNC4INC/0YDQuCDRg9GB0L/QtdGI0L3QvtC8INCy0YvQv9C+0LvQvdC10L3QuNC4INC30LDQv9GA0L7RgdCwXG4gKiBAcGFyYW0gIHtmdW5jdGlvbn0gb25FcnJvciDQmtC+0LvQu9Cx0Y3Quiwg0YHRgNCw0LHQsNGC0YvQstCw0LXRgiDQv9GA0Lgg0L/RgNC4INC90LXRg9GB0L/QtdGI0L3QvtC8INCy0YvQv9C+0LvQvdC10L3QuNC4INC30LDQv9GA0L7RgdCwXG4gKi9cbmNvbnN0IGxvYWQgPSAob25TdWNjZXNzLCBvbkVycm9yKSA9PiB7XG4gIGNvbnN0IHhociA9IGNyZWF0ZVJlcXVlc3Qob25TdWNjZXNzLCBvbkVycm9yKTtcblxuICB4aHIub3BlbihgR0VUYCwgYCR7VVJMfS9kYXRhYCk7XG4gIHhoci5zZW5kKCk7XG59O1xuXG5leHBvcnQgLyoqXG4gKiDQntGC0L/RgNCw0LLQu9GP0LXRgiDQtNCw0L3QvdGL0LUgZGF0YSDQvdCwINGB0LXRgNCy0LXRgFxuICpcbiAqIEBwYXJhbSAgeyp9IGRhdGFcbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBvblN1Y2Nlc3Mg0JrQvtC70LvQsdGN0LosINGB0YDQsNCx0LDRgtGL0LLQsNC10YIg0L/RgNC4INC/0YDQuCDRg9GB0L/QtdGI0L3QvtC5INC+0YLQv9GA0LDQstC60LUg0LTQsNC90L3Ri9GFXG4gKiBAcGFyYW0gIHtmdW5jdGlvbn0gb25FcnJvciDQmtC+0LvQu9Cx0Y3Quiwg0YHRgNCw0LHQsNGC0YvQstCw0LXRgiDQv9GA0Lgg0L/RgNC4INC90LXRg9GB0L/QtdGI0L3QvtC5INC+0YLQv9GA0LDQstC60LUg0LTQsNC90L3Ri9GFXG4gKi9cbmNvbnN0IHVwbG9hZCA9IChkYXRhLCBvblN1Y2Nlc3MsIG9uRXJyb3IpID0+IHtcbiAgY29uc3QgeGhyID0gY3JlYXRlUmVxdWVzdChvblN1Y2Nlc3MsIG9uRXJyb3IpO1xuXG4gIHhoci5vcGVuKGBQT1NUYCwgVVJMKTtcbiAgeGhyLnNlbmQoZGF0YSk7XG59O1xuIl19