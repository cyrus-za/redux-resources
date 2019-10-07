interface PaginatedResponse {
	total: number
	per_page: number
	current_page: number
	last_page: number
	from: number
	to: number
	data: unknown
}

interface Meta {
	total: number
	per_page: number
	current_page: number
	last_page: number
	from: number
	to: number
}

interface GenericObject {
	id: string
}

interface Pagination {
	meta: Meta
	data: GenericObject[]
}

const getPaginationFromLocalStorage = (name: string) => {
	const value = window.localStorage.getItem(name)
	if (value === null) {
		return getPaginationInitialState()
	} else {
		const parsed = JSON.parse(value)
		return getPaginationFulfilled(parsed)
	}
}

const getPaginationInitialState = () => {
	return {
		ui: {
			loaded: false,
			loading: false,
		},
		meta: {
			total: 0,
		},
		data: [],
		error: null,
	}
}

const getPaginationLoading = () => {
	return {
		ui: {
			loaded: false,
			loading: true,
		},
		meta: {
			total: 0,
		},
		data: [],
		error: null,
	}
}

const getPaginationFulfilled = (data: PaginatedResponse) => {
	return {
		ui: {
			loaded: true,
			loading: false,
		},
		meta: {
			total: data.total,
			per_page: data.per_page,
			current_page: data.current_page,
			last_page: data.last_page,
			from: data.from,
			to: data.to,
		},
		data: data.data,
		error: null,
	}
}

const addItemToPagination = (list: Pagination, data: any, prepend = true) => {
	return {
		ui: {
			loaded: true,
			loading: false,
		},
		meta: {
			total: list.meta.total + 1,
			per_page: list.meta.per_page,
			current_page: list.meta.current_page,
			last_page: list.meta.last_page,
			from: list.meta.from,
			to: list.meta.to,
		},
		data: prepend === true ? [data].concat(list.data) : list.data.concat([data]),
		error: null,
	}
}

const removeItemFromPagination = (list: Pagination, resourceId: string) => {
	return {
		ui: {
			loaded: true,
			loading: false,
		},
		meta: {
			total: list.meta.total - 1,
			per_page: list.meta.per_page,
			current_page: list.meta.current_page,
			last_page: list.meta.last_page,
			from: list.meta.from,
			to: list.meta.to,
		},
		data: list.data.filter((item) => item.id !== resourceId),
		error: null,
	}
}

const getPaginationRejected = (error: Object) => {
	return {
		ui: {
			loaded: false,
			loading: false,
		},
		meta: {
			total: 0,
		},
		data: [],
		error: error,
	}
}

const getStringFromLocalStorage = (name: string) => {
	const value = window.localStorage.getItem(name)
	if (value === null) {
		return getItemInitialState()
	} else {
		return getItemFulfilled(value)
	}
}

const getItemFromLocalStorage = (name: string) => {
	const value = window.localStorage.getItem(name)
	if (value === null) {
		return getItemInitialState()
	} else {
		const parsed = JSON.parse(value)
		return getItemFulfilled(parsed)
	}
}
const getItemInitialState = (data = null) => {
	return {
		ui: {
			loaded: false,
			loading: false,
		},
		data: data,
		error: null,
	}
}

const getItemLoading = (data = null) => {
	return {
		ui: {
			loaded: false,
			loading: true,
		},
		data: data,
		error: null,
	}
}

const getItemFulfilled = (data = {}) => {
	return {
		ui: {
			loaded: true,
			loading: false,
		},
		data: data,
		error: null,
	}
}

const getItemRejected = (error: Object, data = null) => {
	return {
		ui: {
			loaded: true,
			loading: false,
		},
		data: data,
		error: error,
	}
}

const getObserverInitialState = () => {
	return {
		ui: {
			loaded: false,
			loading: false,
		},
		error: null,
	}
}

const getObserverLoading = () => {
	return {
		ui: {
			loaded: false,
			loading: true,
		},
		error: null,
	}
}

const getObserverFulfilled = () => {
	return {
		ui: {
			loaded: true,
			loading: false,
		},
		error: null,
	}
}

const getObserverRejected = (error: Object) => {
	return {
		ui: {
			loaded: true,
			loading: false,
		},
		error: error,
	}
}

export default {
	getPaginationFromLocalStorage,
	getPaginationInitialState,
	getPaginationLoading,
	getPaginationFulfilled,
	addItemToPagination,
	removeItemFromPagination,
	getPaginationRejected,

	getStringFromLocalStorage,
	getItemFromLocalStorage,
	getItemInitialState,
	getItemLoading,
	getItemFulfilled,
	getItemRejected,

	getObserverInitialState,
	getObserverLoading,
	getObserverFulfilled,
	getObserverRejected,
}
