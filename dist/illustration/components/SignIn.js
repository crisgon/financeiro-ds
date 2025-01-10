"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignIn = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var SignIn = exports.SignIn = function SignIn(_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? 334 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 267 : _ref$height;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 ".concat(width, " ").concat(height),
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M48.5727 224.737L49.5568 224.65L50.0492 217.34C55.6167 220.044 61.1166 223.43 65.5185 227.596L65.5186 227.596C72.9484 234.627 78.532 242.215 81.562 248.784C83.0776 252.069 83.9435 255.076 84.097 257.617C84.2504 260.156 83.6912 262.182 82.4159 263.583C81.1422 264.982 79.2085 265.698 76.7199 265.731C74.2287 265.764 71.2266 265.108 67.9016 263.812C61.2547 261.221 53.4188 256.109 45.9888 249.077C44.7418 247.889 43.5583 246.633 42.4435 245.315L50.8532 244.079L50.8686 243.092L39.1123 240.986C34.0739 233.821 30.3415 225.573 27.8622 219.087C26.6137 215.82 25.685 213.006 25.0686 211.01C24.7605 210.011 24.5305 209.218 24.3777 208.674C24.3723 208.655 24.367 208.636 24.3618 208.618C24.7729 208.704 25.336 208.827 26.03 208.989C27.5391 209.339 29.6668 209.869 32.1977 210.601L33.3186 215.11L34.3027 215.023L34.5538 211.305C38.5432 212.534 42.4664 213.976 46.3071 215.626L48.5727 224.737Z",
    stroke: "#47A138"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M70.4152 214.379L71.3023 214.813L75.4551 208.917C78.8753 214.081 81.8888 219.785 83.5565 225.577C86.37 235.347 87.3083 244.628 86.5675 251.727C86.197 255.277 85.409 258.255 84.2465 260.471C83.0849 262.685 81.5726 264.097 79.7609 264.615C77.9489 265.133 75.9142 264.734 73.7506 263.47C71.5856 262.205 69.3326 260.096 67.129 257.281C62.7237 251.653 58.5807 243.288 55.7671 233.518C55.3006 231.877 54.9226 230.213 54.6347 228.533L62.5056 231.848L63.0276 231.01L53.9713 223.142C53.2873 214.5 54.2797 205.624 55.4528 198.879C56.0435 195.483 56.679 192.633 57.1666 190.633C57.4104 189.633 57.6171 188.846 57.7626 188.309C57.7668 188.294 57.7709 188.279 57.775 188.264C58.0852 188.55 58.5089 188.946 59.0266 189.444C60.1482 190.52 61.7109 192.07 63.5185 193.997L62.1857 198.368L63.0727 198.802L65.1842 195.805C67.9962 198.909 70.6419 202.158 73.1104 205.54L70.4152 214.379Z",
    stroke: "#47A138"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M209.222 63.2663H207.76V23.1938C207.76 20.1479 207.16 17.1319 205.996 14.3179C204.831 11.5039 203.123 8.94705 200.971 6.79331C198.819 4.63956 196.263 2.93112 193.451 1.76552C190.639 0.599924 187.625 0 184.581 0H99.7329C93.5854 0 87.6897 2.44363 83.3428 6.79331C78.9959 11.143 76.5538 17.0424 76.5538 23.1938V243.039C76.5538 246.084 77.1534 249.1 78.3182 251.914C79.4831 254.728 81.1904 257.285 83.3428 259.439C85.4952 261.593 88.0504 263.301 90.8627 264.467C93.6749 265.632 96.689 266.232 99.7329 266.232H184.581C190.728 266.232 196.624 263.789 200.971 259.439C205.318 255.089 207.76 249.19 207.76 243.039V91.7907H209.221L209.222 63.2663Z",
    fill: "#E6E6E6"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M185.602 6.2749H174.505C175.016 7.52209 175.21 8.87525 175.073 10.2152C174.935 11.5551 174.468 12.8406 173.714 13.9585C172.96 15.0764 171.942 15.9924 170.75 16.6257C169.557 17.259 168.226 17.5902 166.875 17.5901H118.168C116.817 17.5901 115.487 17.2588 114.294 16.6254C113.101 15.9921 112.083 15.0761 111.33 13.9582C110.576 12.8403 110.109 11.5548 109.972 10.215C109.834 8.87513 110.028 7.52204 110.539 6.2749H100.174C95.5734 6.2749 91.1617 8.0963 87.9089 11.3384C84.6561 14.5805 82.8287 18.9778 82.8287 23.5628V242.67C82.8287 247.255 84.6561 251.652 87.9089 254.894C91.1617 258.136 95.5734 259.958 100.174 259.958H185.602C190.202 259.958 194.614 258.136 197.867 254.894C201.12 251.652 202.947 247.255 202.947 242.67V23.5624C202.947 18.9775 201.12 14.5803 197.867 11.3383C194.614 8.09625 190.202 6.2749 185.602 6.2749Z",
    fill: "white"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M131.532 93.2268C131.532 91.653 131.919 90.107 132.653 88.7442C133.388 87.3814 134.444 86.25 135.717 85.4638C134.445 84.6768 133.002 84.2624 131.534 84.2622C130.065 84.262 128.622 84.6761 127.351 85.4628C126.079 86.2495 125.022 87.3812 124.288 88.7439C123.554 90.1067 123.167 91.6526 123.167 93.2263C123.167 94.7999 123.554 96.3458 124.288 97.7086C125.022 99.0714 126.079 100.203 127.351 100.99C128.622 101.776 130.065 102.19 131.534 102.19C133.002 102.19 134.445 101.776 135.717 100.989C134.445 100.203 133.388 99.0715 132.653 97.7089C131.919 96.3463 131.532 94.8004 131.532 93.2268Z",
    fill: "#CCCCCC"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M142.887 93.2268C142.886 91.653 143.3 90.1069 144.088 88.7441C144.875 87.3813 146.007 86.2499 147.37 85.4638C146.007 84.6768 144.462 84.2624 142.888 84.2622C141.315 84.262 139.769 84.6761 138.406 85.4628C137.043 86.2495 135.912 87.3812 135.125 88.7439C134.338 90.1067 133.924 91.6526 133.924 93.2263C133.924 94.7999 134.338 96.3458 135.125 97.7086C135.912 99.0714 137.043 100.203 138.406 100.99C139.769 101.776 141.315 102.19 142.888 102.19C144.462 102.19 146.007 101.776 147.37 100.989C146.007 100.203 144.875 99.0715 144.088 97.7089C143.301 96.3463 142.886 94.8004 142.887 93.2268Z",
    fill: "#CCCCCC"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M153.645 102.19C158.596 102.19 162.609 98.177 162.609 93.2263C162.609 88.2755 158.596 84.2622 153.645 84.2622C148.694 84.2622 144.681 88.2755 144.681 93.2263C144.681 98.177 148.694 102.19 153.645 102.19Z",
    fill: "#47A138"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M167.948 121.015H116.931C116.446 121.014 115.98 120.821 115.636 120.478C115.293 120.134 115.1 119.668 115.099 119.183V68.1659C115.1 67.6802 115.293 67.2146 115.636 66.8712C115.98 66.5277 116.446 66.3346 116.931 66.334H167.948C168.434 66.3346 168.899 66.5277 169.243 66.8712C169.586 67.2146 169.779 67.6802 169.78 68.1659V119.183C169.779 119.668 169.586 120.134 169.243 120.478C168.899 120.821 168.434 121.014 167.948 121.015ZM116.931 67.0672C116.64 67.0675 116.36 67.1834 116.154 67.3894C115.948 67.5955 115.832 67.8749 115.832 68.1663V119.183C115.832 119.475 115.948 119.754 116.154 119.96C116.36 120.166 116.64 120.282 116.931 120.282H167.948C168.239 120.282 168.519 120.166 168.725 119.96C168.931 119.754 169.047 119.475 169.047 119.183V68.1663C169.047 67.8749 168.931 67.5955 168.725 67.3894C168.519 67.1834 168.239 67.0675 167.948 67.0672H116.931Z",
    fill: "#CCCCCC"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M191.091 157.179H96.0719V158.075H191.091V157.179Z",
    fill: "#004D61"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M191.091 184.967H96.0719V185.864H191.091V184.967Z",
    fill: "#004D61"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M98.9803 151.576C100.736 151.576 102.159 150.152 102.159 148.397C102.159 146.641 100.736 145.218 98.9803 145.218C97.2246 145.218 95.8014 146.641 95.8014 148.397C95.8014 150.152 97.2246 151.576 98.9803 151.576Z",
    fill: "#47A138"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M98.9803 178.75C100.736 178.75 102.159 177.327 102.159 175.571C102.159 173.815 100.736 172.392 98.9803 172.392C97.2246 172.392 95.8014 173.815 95.8014 175.571C95.8014 177.327 97.2246 178.75 98.9803 178.75Z",
    fill: "#47A138"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M188.848 218.779H157.037C156.487 218.778 155.96 218.56 155.572 218.171C155.183 217.783 154.965 217.256 154.964 216.706V205.557C154.965 205.007 155.183 204.48 155.572 204.092C155.96 203.703 156.487 203.484 157.037 203.484H188.848C189.398 203.484 189.925 203.703 190.313 204.092C190.702 204.48 190.92 205.007 190.921 205.557V216.706C190.92 217.256 190.702 217.783 190.313 218.171C189.925 218.56 189.398 218.778 188.848 218.779Z",
    fill: "#47A138"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M109.349 151.576C111.105 151.576 112.528 150.152 112.528 148.397C112.528 146.641 111.105 145.218 109.349 145.218C107.594 145.218 106.171 146.641 106.171 148.397C106.171 150.152 107.594 151.576 109.349 151.576Z",
    fill: "#47A138"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M109.349 178.75C111.105 178.75 112.528 177.327 112.528 175.571C112.528 173.815 111.105 172.392 109.349 172.392C107.594 172.392 106.171 173.815 106.171 175.571C106.171 177.327 107.594 178.75 109.349 178.75Z",
    fill: "#47A138"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M119.719 151.576C121.474 151.576 122.898 150.152 122.898 148.397C122.898 146.641 121.474 145.218 119.719 145.218C117.963 145.218 116.54 146.641 116.54 148.397C116.54 150.152 117.963 151.576 119.719 151.576Z",
    fill: "#47A138"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M119.719 178.75C121.474 178.75 122.898 177.327 122.898 175.571C122.898 173.815 121.474 172.392 119.719 172.392C117.963 172.392 116.54 173.815 116.54 175.571C116.54 177.327 117.963 178.75 119.719 178.75Z",
    fill: "#47A138"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M332.346 267H1.65403C0.946112 267 0.372681 266.749 0.372681 266.439C0.372681 266.13 0.946112 265.878 1.65403 265.878H332.346C333.053 265.878 333.627 266.129 333.627 266.439C333.627 266.749 333.053 267 332.346 267Z",
    fill: "#3F3D56"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M209.593 106.735L209.818 106.884L210.066 106.779L238.026 94.8751L238.287 94.7638L238.326 94.4824L239.265 87.5655L249.48 87.5032L248.855 103.461L212.309 113.102L212.039 113.173L211.958 113.44C211.887 113.675 211.801 113.905 211.702 114.129C211.211 115.173 210.421 116.05 209.432 116.648C208.441 117.248 207.295 117.543 206.137 117.495C204.979 117.447 203.861 117.059 202.923 116.38C201.986 115.7 201.271 114.76 200.868 113.677C200.464 112.593 200.391 111.416 200.657 110.291C200.923 109.166 201.516 108.145 202.362 107.355C203.207 106.565 204.269 106.042 205.412 105.852C206.554 105.662 207.728 105.812 208.785 106.285C209.066 106.413 209.336 106.563 209.593 106.735Z",
    stroke: "black"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M253.499 259.5H246.99L243.563 230.5L253.5 230.501L253.499 259.5Z",
    stroke: "black"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M241.273 257H256V267H232C232 264.348 232.977 261.804 234.716 259.929C236.455 258.054 238.814 257 241.273 257Z",
    fill: "#2F2E41"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M280.685 228.547L283.454 256.805L276.847 257.459L270.611 229.545L280.685 228.547Z",
    stroke: "black"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M270.954 256.485L285.71 255.032L286.625 264.322L262.579 266.691C262.459 265.471 262.58 264.239 262.936 263.066C263.292 261.892 263.875 260.801 264.653 259.853C265.431 258.906 266.387 258.12 267.468 257.542C268.55 256.965 269.734 256.605 270.954 256.485Z",
    fill: "#2F2E41"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M256.5 55C265.061 55 272 48.0604 272 39.5C272 30.9396 265.061 24 256.5 24C247.94 24 241 30.9396 241 39.5C241 48.0604 247.94 55 256.5 55Z",
    fill: "#FF5031"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M244.954 254C244.297 254.002 243.661 253.769 243.158 253.342C242.654 252.916 242.316 252.323 242.202 251.668C238.247 229.455 225.319 156.821 225.01 154.809C225.003 154.763 225 154.716 225 154.669V149.253C225 149.056 225.061 148.864 225.174 148.703L226.882 146.283C226.963 146.167 227.07 146.071 227.193 146.002C227.317 145.934 227.454 145.895 227.595 145.889C237.332 145.427 269.22 144.074 270.76 146.021C272.307 147.978 271.761 153.908 271.635 155.077L271.641 155.199L285.968 247.896C286.08 248.635 285.9 249.389 285.466 249.995C285.033 250.601 284.381 251.01 283.652 251.134L274.704 252.625C274.038 252.734 273.355 252.596 272.78 252.239C272.206 251.881 271.777 251.326 271.572 250.675C268.804 241.728 259.525 211.629 256.309 199.982C256.289 199.908 256.243 199.845 256.179 199.803C256.116 199.761 256.04 199.743 255.965 199.754C255.89 199.765 255.822 199.803 255.772 199.861C255.723 199.919 255.697 199.993 255.698 200.07C255.858 211.172 256.247 239.498 256.38 249.281L256.395 250.335C256.401 251.048 256.142 251.738 255.67 252.267C255.198 252.797 254.546 253.128 253.844 253.195L245.216 253.988C245.128 253.996 245.04 254 244.954 254Z",
    fill: "#2F2E41"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M246.682 61.4321C243.95 63.0291 242.315 65.9639 241.377 68.9503C239.64 74.4791 238.595 80.1955 238.264 85.973L237.273 103.272L225 149.133C235.637 157.983 241.773 155.972 256.091 148.733C270.41 141.493 272.046 151.146 272.046 151.146L274.909 112.125L279 69.4838C278.082 68.3964 277.043 67.4137 275.902 66.5542C272.12 63.6627 267.721 61.653 263.035 60.6764C258.349 59.6997 253.499 59.7817 248.85 60.9161L246.682 61.4321Z",
    fill: "#47A138"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M243.517 115.963L243.752 116.098L243.994 115.975L271.718 101.882L271.973 101.752L271.99 101.466L272.424 94.2689L282.906 93.5349L283.487 110.05L246.792 122.375L246.527 122.464L246.464 122.737C246.184 123.958 245.545 125.061 244.633 125.902C243.721 126.743 242.58 127.281 241.362 127.446C240.144 127.611 238.905 127.396 237.809 126.828C236.713 126.26 235.812 125.366 235.227 124.264C234.642 123.161 234.401 121.903 234.537 120.657C234.673 119.412 235.178 118.238 235.986 117.293C236.793 116.348 237.864 115.676 239.054 115.365C240.245 115.055 241.499 115.119 242.653 115.55C242.951 115.665 243.24 115.802 243.517 115.963Z",
    stroke: "black"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M278.22 69.8247C284.835 72.2227 286 98.2022 286 98.2022C278.218 93.8059 268.879 101 268.879 101C268.879 101 266.934 94.2057 264.599 85.4131C263.894 82.9399 263.81 80.3238 264.354 77.8081C264.898 75.2925 266.053 72.9592 267.712 71.0254C267.712 71.0254 271.605 67.4252 278.22 69.8247Z",
    fill: "#47A138"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M242.148 32.66C241.926 33.0055 241.74 33.3583 241.583 33.7005C241.465 31.6902 241.473 29.6739 241.606 27.6629C241.78 26.1498 242.991 24.5268 245.376 22.9666C247.75 21.4134 251.201 19.9824 255.652 18.8314C259.905 17.7318 263.143 19.5489 265.36 21.6998C266.47 22.7759 267.311 23.9258 267.875 24.809C268.157 25.2499 268.368 25.6222 268.508 25.8829C268.578 26.0131 268.631 26.1153 268.665 26.184C268.682 26.2184 268.695 26.2443 268.703 26.2612L268.712 26.2796L268.714 26.2836L268.714 26.284L268.714 26.2842L268.714 26.2842L268.788 26.443L268.945 26.5209C270.328 27.2064 271.261 28.641 271.826 30.4991C272.389 32.3502 272.562 34.5466 272.481 36.6236C272.401 38.7008 272.069 40.6197 271.648 41.9077C271.434 42.5624 271.213 43.0029 271.025 43.2267C270.986 43.2727 270.956 43.3014 270.934 43.319C269.717 42.3815 268.323 42.823 267.378 43.3527C267.02 43.5531 266.7 43.7794 266.439 43.9851L264.987 31.0383L264.931 30.5382L264.432 30.5975L264.431 30.5975L264.43 30.5977L264.425 30.5982L264.405 30.6006L264.324 30.6097C264.253 30.6176 264.147 30.6292 264.009 30.6433C263.733 30.6717 263.331 30.7105 262.829 30.7524C261.825 30.8362 260.421 30.9319 258.825 30.9798C255.619 31.0759 251.681 30.977 248.632 30.2227C246.977 29.8132 245.628 29.972 244.543 30.4794C243.466 30.9834 242.694 31.8094 242.148 32.66Z",
    stroke: "black"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M251.523 40.7972C251.395 40.7148 251.278 40.5828 251.18 40.4103C251.116 40.2873 251.066 40.1396 251.036 39.9777C251.005 39.8158 250.994 39.6436 251.003 39.473C251.009 39.3515 251.029 39.2339 251.064 39.1294C251.098 39.025 251.145 38.9366 251.2 38.871C251.345 38.7069 251.537 38.7131 251.73 38.8781L251.752 36L251.909 36.0041L251.883 39.3877L251.763 39.2433C251.625 39.0762 251.426 38.955 251.283 39.1173C251.247 39.1603 251.218 39.2177 251.196 39.2851C251.175 39.3526 251.162 39.4282 251.159 39.5061C251.153 39.6332 251.161 39.7614 251.184 39.882C251.206 40.0026 251.243 40.1127 251.291 40.205C251.461 40.516 251.713 40.6202 252 40.7155L251.972 41C251.82 40.9573 251.669 40.8894 251.523 40.7972Z",
    fill: "black"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M247.563 36.9604L249.841 37.3054L249.777 37.7283L247.499 37.3833L247.563 36.9604Z",
    fill: "black"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M259.207 36.9604L256.929 37.3054L256.993 37.7283L259.271 37.3833L259.207 36.9604Z",
    fill: "black"
  }));
};