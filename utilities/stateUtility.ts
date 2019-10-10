import {
	PaginatedResponse,
	PaginatedApiResponse,
	Item,
	Observer
} from '../types/api'

const getPaginationFromLocalStorage = (name: string): PaginatedResponse => {
	const value = window.localStorage.getItem(name)
	if (value === null) {
		return getPaginationInitialState()
	} else {
		const parsed = JSON.parse(value)
		return getPaginationFulfilled(parsed)
	}
}

const getPaginationInitialState = (): PaginatedResponse => {
	return {
		ui: {
			loaded: false,
			loading: false,
		},
		meta: {
			total: 0,
			per_page: 0,
			current_page: 0,
			last_page: 0,
			from: 0,
			to: 0,
		},
		data: [],
		error: null,
	}
}

const getPaginationLoading = (): PaginatedResponse => {
	return {
		ui: {
			loaded: false,
			loading: true,
		},
        meta: {
            total: 0,
            per_page: 0,
            current_page: 0,
            last_page: 0,
            from: 0,
            to: 0,
        },
		data: [],
		error: null,
	}
}

const getPaginationFulfilled = (data: PaginatedApiResponse): PaginatedResponse => {
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

const addItemToPagination = (list: PaginatedResponse, data: Array<object>, prepend = true): PaginatedResponse => {
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

const removeItemFromPagination = (list: PaginatedResponse, resourceId: string): PaginatedResponse => {
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

const getPaginationRejected = (error: any): PaginatedResponse => {
	return {
		ui: {
			loaded: false,
			loading: false,
		},
		meta: {
            total: 0,
            per_page: 0,
            current_page: 0,
            last_page: 0,
            from: 0,
            to: 0,
		},
		data: [],
		error: error,
	}
}

const getStringFromLocalStorage = (name: string): Item => {
	const value = window.localStorage.getItem(name)
	if (value === null) {
		return getItemInitialState()
	} else {
		return getItemFulfilled(value)
	}
}

const getItemFromLocalStorage = (name: string): Item => {
	const value = window.localStorage.getItem(name)
	if (value === null) {
		return getItemInitialState()
	} else {
		const parsed = JSON.parse(value)
		return getItemFulfilled(parsed)
	}
}
const getItemInitialState = (data = null): Item => {
	return {
		ui: {
			loaded: false,
			loading: false,
		},
		data: data,
		error: null,
	}
}

const getItemLoading = (data = null): Item => {
	return {
		ui: {
			loaded: false,
			loading: true,
		},
		data: data,
		error: null,
	}
}

const getItemFulfilled = (data = {}): Item => {
	return {
		ui: {
			loaded: true,
			loading: false,
		},
		data: data,
		error: null,
	}
}

const getItemRejected = (error: any, data = null): Item => {
	return {
		ui: {
			loaded: true,
			loading: false,
		},
		data: data,
		error: error,
	}
}

const getObserverInitialState = (): Observer => {
	return {
		ui: {
			loaded: false,
			loading: false,
		},
		error: null,
	}
}

const getObserverLoading = (): Observer => {
	return {
		ui: {
			loaded: false,
			loading: true,
		},
		error: null,
	}
}

const getObserverFulfilled = (): Observer => {
	return {
		ui: {
			loaded: true,
			loading: false,
		},
		error: null,
	}
}

const getObserverRejected = (error: any): Observer => {
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
