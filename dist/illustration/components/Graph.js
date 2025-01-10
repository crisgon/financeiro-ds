"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Graph = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Graph = exports.Graph = function Graph(_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? 128 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 127 : _ref$height;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 ".concat(width, " ").concat(height),
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "64",
    cy: "63.608",
    r: "53.6999",
    stroke: "#F1823D",
    strokeWidth: "18.9529"
  }), /*#__PURE__*/_react["default"].createElement("mask", {
    id: "path-2-inside-1_577_4932",
    fill: "white"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M64 9.95201C64 4.69405 68.2862 0.358206 73.4846 1.14759C83.1428 2.61422 92.3746 6.30829 100.427 11.9907C111.084 19.5119 119.153 30.1478 123.524 42.4381C127.895 54.7283 128.354 68.0703 124.839 80.6321C121.324 93.194 114.007 104.36 103.892 112.597C93.777 120.833 81.3604 125.737 68.3469 126.635C55.3334 127.532 42.3611 124.379 31.2112 117.609C20.0612 110.839 11.2802 100.784 6.07383 88.8234C2.14034 79.7871 0.392966 69.9984 0.913213 60.2433C1.19323 54.9928 6.30745 51.6738 11.4564 52.7389C16.6053 53.804 19.8056 58.868 19.8674 64.1256C19.9361 69.9809 21.1698 75.7966 23.5322 81.2237C27.1694 89.5793 33.3039 96.6042 41.0934 101.334C48.8829 106.064 57.9454 108.266 67.0368 107.639C76.1281 107.012 84.8025 103.586 91.8689 97.8319C98.9353 92.0776 104.047 84.2771 106.503 75.5012C108.959 66.7254 108.638 57.4046 105.584 48.8185C102.53 40.2324 96.8936 32.8021 89.448 27.5476C84.612 24.1348 79.1668 21.7486 73.4468 20.4952C68.3108 19.3698 64 15.21 64 9.95201Z"
  })), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M64 9.95201C64 4.69405 68.2862 0.358206 73.4846 1.14759C83.1428 2.61422 92.3746 6.30829 100.427 11.9907C111.084 19.5119 119.153 30.1478 123.524 42.4381C127.895 54.7283 128.354 68.0703 124.839 80.6321C121.324 93.194 114.007 104.36 103.892 112.597C93.777 120.833 81.3604 125.737 68.3469 126.635C55.3334 127.532 42.3611 124.379 31.2112 117.609C20.0612 110.839 11.2802 100.784 6.07383 88.8234C2.14034 79.7871 0.392966 69.9984 0.913213 60.2433C1.19323 54.9928 6.30745 51.6738 11.4564 52.7389C16.6053 53.804 19.8056 58.868 19.8674 64.1256C19.9361 69.9809 21.1698 75.7966 23.5322 81.2237C27.1694 89.5793 33.3039 96.6042 41.0934 101.334C48.8829 106.064 57.9454 108.266 67.0368 107.639C76.1281 107.012 84.8025 103.586 91.8689 97.8319C98.9353 92.0776 104.047 84.2771 106.503 75.5012C108.959 66.7254 108.638 57.4046 105.584 48.8185C102.53 40.2324 96.8936 32.8021 89.448 27.5476C84.612 24.1348 79.1668 21.7486 73.4468 20.4952C68.3108 19.3698 64 15.21 64 9.95201Z",
    stroke: "#FF3C82",
    strokeWidth: "37.9058",
    mask: "url(#path-2-inside-1_577_4932)"
  }), /*#__PURE__*/_react["default"].createElement("mask", {
    id: "path-3-inside-2_577_4932",
    fill: "white"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M64 9.95201C64 4.69405 68.2861 0.358257 73.4845 1.14763C80.0657 2.14699 86.4678 4.18331 92.447 7.19862C101.27 11.6479 108.926 18.1045 114.8 26.0499C120.674 33.9952 124.603 43.2077 126.27 52.9471C127.938 62.6864 127.297 72.6811 124.401 82.1281C121.504 91.575 116.432 100.211 109.592 107.342C102.752 114.472 94.3344 119.899 85.0161 123.186C75.6978 126.473 65.7384 127.529 55.9381 126.268C49.2963 125.413 42.8531 123.511 36.8428 120.65C32.0955 118.389 30.9764 112.396 33.9237 108.042C36.871 103.688 42.7725 102.659 47.6567 104.606C51.0849 105.973 54.6826 106.909 58.3679 107.383C65.2144 108.264 72.1722 107.526 78.682 105.23C85.1919 102.934 91.0724 99.1424 95.8509 94.1607C100.63 89.1791 104.173 83.146 106.197 76.5463C108.22 69.9466 108.668 62.9642 107.503 56.1602C106.338 49.3561 103.593 42.9202 99.4893 37.3695C95.3855 31.8188 90.037 27.3081 83.8733 24.1999C80.5557 22.5268 77.0518 21.2851 73.4468 20.4952C68.3107 19.3698 64 15.21 64 9.95201Z"
  })), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M64 9.95201C64 4.69405 68.2861 0.358257 73.4845 1.14763C80.0657 2.14699 86.4678 4.18331 92.447 7.19862C101.27 11.6479 108.926 18.1045 114.8 26.0499C120.674 33.9952 124.603 43.2077 126.27 52.9471C127.938 62.6864 127.297 72.6811 124.401 82.1281C121.504 91.575 116.432 100.211 109.592 107.342C102.752 114.472 94.3344 119.899 85.0161 123.186C75.6978 126.473 65.7384 127.529 55.9381 126.268C49.2963 125.413 42.8531 123.511 36.8428 120.65C32.0955 118.389 30.9764 112.396 33.9237 108.042C36.871 103.688 42.7725 102.659 47.6567 104.606C51.0849 105.973 54.6826 106.909 58.3679 107.383C65.2144 108.264 72.1722 107.526 78.682 105.23C85.1919 102.934 91.0724 99.1424 95.8509 94.1607C100.63 89.1791 104.173 83.146 106.197 76.5463C108.22 69.9466 108.668 62.9642 107.503 56.1602C106.338 49.3561 103.593 42.9202 99.4893 37.3695C95.3855 31.8188 90.037 27.3081 83.8733 24.1999C80.5557 22.5268 77.0518 21.2851 73.4468 20.4952C68.3107 19.3698 64 15.21 64 9.95201Z",
    stroke: "#8F3CFF",
    strokeWidth: "37.9058",
    mask: "url(#path-3-inside-2_577_4932)"
  }), /*#__PURE__*/_react["default"].createElement("mask", {
    id: "path-4-inside-3_577_4932",
    fill: "white"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M64 9.95201C64 4.69405 68.2861 0.358264 73.4844 1.14763C79.1671 2.01054 84.7203 3.64718 89.9864 6.02363C98.1539 9.70944 105.444 15.0905 111.372 21.8097C117.301 28.5288 121.732 36.4322 124.372 44.9952C126.074 50.5162 127.007 56.23 127.155 61.9759C127.291 67.2321 122.455 70.9448 117.238 70.29C112.021 69.6352 108.431 64.8401 107.954 59.6038C107.676 56.5591 107.082 53.5429 106.177 50.6049C104.332 44.6227 101.237 39.1013 97.0948 34.4073C92.9531 29.7132 87.8602 25.9539 82.1543 23.379C79.3519 22.1144 76.4332 21.1496 73.4467 20.4952C68.3106 19.3698 64 15.21 64 9.95201Z"
  })), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M64 9.95201C64 4.69405 68.2861 0.358264 73.4844 1.14763C79.1671 2.01054 84.7203 3.64718 89.9864 6.02363C98.1539 9.70944 105.444 15.0905 111.372 21.8097C117.301 28.5288 121.732 36.4322 124.372 44.9952C126.074 50.5162 127.007 56.23 127.155 61.9759C127.291 67.2321 122.455 70.9448 117.238 70.29C112.021 69.6352 108.431 64.8401 107.954 59.6038C107.676 56.5591 107.082 53.5429 106.177 50.6049C104.332 44.6227 101.237 39.1013 97.0948 34.4073C92.9531 29.7132 87.8602 25.9539 82.1543 23.379C79.3519 22.1144 76.4332 21.1496 73.4467 20.4952C68.3106 19.3698 64 15.21 64 9.95201Z",
    stroke: "#2567F9",
    strokeWidth: "37.9058",
    mask: "url(#path-4-inside-3_577_4932)"
  }));
};