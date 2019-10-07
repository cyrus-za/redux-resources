import { isArray, isObject, mapKeys, snakeCase, camelCase, mapValues } from 'lodash'

export const keysToSnakeCase = (object) => mapKeys(object, (v, k) => snakeCase(k))

export const keysToCamelCase = (object) => mapKeys(object, (v, k) => camelCase(k))

export const deepKeysToCamelCase = (object) => {
	if (isArray(object)) return object.map(deepKeysToCamelCase)
	const obj = mapValues(object, (v, k) => (isObject(v) ? deepKeysToCamelCase(v) : v))
	return keysToCamelCase(obj)
}
