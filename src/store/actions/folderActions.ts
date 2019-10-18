const types = {
	GET_FOLDERS: '[folders] GET_FOLDERS',
	GET_FOLDERS_INITIAL_STATE: '[folders] GET_FOLDERS_INITIAL_STATE',
	GET_FOLDERS_LOADING: '[folders] GET_FOLDERS_LOADING',
	GET_FOLDERS_FULFILLED: '[folders] GET_FOLDERS_FULFILLED',
	GET_FOLDERS_REJECTED: '[folders] GET_FOLDERS_REJECTED',
	CREATE_FOLDER: '[folders] CREATE_FOLDER',
	CREATE_FOLDER_INITIAL_STATE: '[folders] CREATE_FOLDER_INITIAL_STATE',
	CREATE_FOLDER_LOADING: '[folders] CREATE_FOLDER_LOADING',
	CREATE_FOLDER_FULFILLED: '[folders] CREATE_FOLDER_FULFILLED',
	CREATE_FOLDER_REJECTED: '[folders] CREATE_FOLDER_REJECTED',
	UPDATE_FOLDER: '[folders] UPDATE_FOLDER',
	UPDATE_FOLDER_INITIAL_STATE: '[folders] UPDATE_FOLDER_INITIAL_STATE',
	UPDATE_FOLDER_LOADING: '[folders] UPDATE_FOLDER_LOADING',
	UPDATE_FOLDER_FULFILLED: '[folders] UPDATE_FOLDER_FULFILLED',
	UPDATE_FOLDER_REJECTED: '[folders] UPDATE_FOLDER_REJECTED',
}

export default {
	...types,
	getFolders: (query = {}) => ({
		type: types.GET_FOLDERS,
		payload: null,
		query,
	}),
	getFoldersInitialState: () => ({
		type: types.GET_FOLDERS_INITIAL_STATE,
		payload: null,
	}),
	getFoldersLoading: () => ({
		type: types.GET_FOLDERS_LOADING,
		payload: null,
	}),
	getFoldersFulfilled: (response) => ({
		type: types.GET_FOLDERS_FULFILLED,
		payload: response,
	}),
	getFoldersRejected: (response) => ({
		type: types.GET_FOLDERS_REJECTED,
		payload: response,
	}),

	createFolder: (data, successCb, errorCb) => ({
		type: types.CREATE_FOLDER,
		payload: null,
		data,
		successCb,
		errorCb,
	}),
	createFolderInitialState: () => ({
		type: types.CREATE_FOLDER_INITIAL_STATE,
		payload: null,
	}),
	createFolderLoading: () => ({
		type: types.CREATE_FOLDER_LOADING,
		payload: null,
	}),
	createFolderFulfilled: (response) => ({
		type: types.CREATE_FOLDER_FULFILLED,
		payload: response,
	}),
	createFolderRejected: (response) => ({
		type: types.CREATE_FOLDER_REJECTED,
		payload: response,
	}),

	updateFolder: (id, data) => ({
		type: types.UPDATE_FOLDER,
		payload: null,
		id,
		data,
	}),
	updateFolderInitialState: () => ({
		type: types.UPDATE_FOLDER_INITIAL_STATE,
		payload: null,
	}),
	updateFolderLoading: () => ({
		type: types.UPDATE_FOLDER_LOADING,
		payload: null,
	}),
	updateFolderFulfilled: (response) => ({
		type: types.UPDATE_FOLDER_FULFILLED,
		payload: response,
	}),
	updateFolderRejected: (response) => ({
		type: types.UPDATE_FOLDER_REJECTED,
		payload: response,
	}),
}
