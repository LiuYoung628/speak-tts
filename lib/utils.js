"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateLocale = exports.trim = exports.splitSentences = exports.size = exports.isString = exports.isObject = exports.isNil = exports.isNan = void 0;
var splitSentences = exports.splitSentences = function splitSentences() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return text.replace(/\.+/g, '.|').replace(/\?/g, '?|').replace(/\!/g, '!|').split("|").map(function (sentence) {
    return trim(sentence);
  }).filter(Boolean);
};
var bcp47LocalePattern = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i; // eslint-disable-line max-len

/**
 * Validate a locale string to test if it is bcp47 compliant
 * @param {String} locale The tag locale to parse
 * @return {Boolean} True if tag is bcp47 compliant false otherwise
 */
var validateLocale = exports.validateLocale = function validateLocale(locale) {
  return typeof locale !== 'string' ? false : bcp47LocalePattern.test(locale);
};
var isString = exports.isString = function isString(value) {
  return typeof value === 'string' || value instanceof String;
};
var size = exports.size = function size(value) {
  return value && Array.isArray(value) && value.length ? value.length : 0;
};
var isNan = exports.isNan = function isNan(value) {
  return typeof value === "number" && isNaN(value);
};
var isNil = exports.isNil = function isNil(value) {
  return value === null || value === undefined;
};
var isObject = exports.isObject = function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
};
var trim = exports.trim = function trim(value) {
  return isString(value) ? value.trim() : '';
};