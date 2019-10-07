import { isArray, isObject, mapKeys, snakeCase, camelCase, mapValues } from 'lodash'

export const keysToSnakeCase = (object: any): any => mapKeys(object, (v, k) => snakeCase(k))

export const keysToCamelCase = (object: any): any => mapKeys(object, (v, k) => camelCase(k))

export const deepKeysToCamelCase = (object: any): any => {
	if (isArray(object)) return object.map(deepKeysToCamelCase)
	const obj = mapValues(object, (v, k) => (isObject(v) ? deepKeysToCamelCase(v) : v))
	return keysToCamelCase(obj)
}
