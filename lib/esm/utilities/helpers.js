import { isArray, isObject, mapKeys, snakeCase, camelCase, mapValues } from 'lodash';
export var keysToSnakeCase = function (object) {
  return mapKeys(object, function (v, k) {
    return snakeCase(k);
  });
};
export var keysToCamelCase = function (object) {
  return mapKeys(object, function (v, k) {
    return camelCase(k);
  });
};
export var deepKeysToCamelCase = function (object) {
  if (isArray(object)) return object.map(deepKeysToCamelCase);
  var obj = mapValues(object, function (v, k) {
    return isObject(v) ? deepKeysToCamelCase(v) : v;
  });
  return keysToCamelCase(obj);
};