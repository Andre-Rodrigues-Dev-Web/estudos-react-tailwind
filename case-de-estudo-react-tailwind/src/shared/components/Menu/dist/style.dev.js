"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContainerLinks = exports.ContainerButtonHamburguer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: ", ";\n\n  @media (min-width: 48em) {\n    display: block;\n    min-width: 640px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: transparent;\n  display: block;\n\n  @media (min-width: 48em) {\n    display: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ContainerButtonHamburguer = _styledComponents["default"].button(_templateObject());

exports.ContainerButtonHamburguer = ContainerButtonHamburguer;

var ContainerLinks = _styledComponents["default"].nav(_templateObject2(), function (_ref) {
  var $isOpen = _ref.$isOpen;
  return $isOpen ? 'block' : 'none';
});

exports.ContainerLinks = ContainerLinks;
//# sourceMappingURL=style.dev.js.map
