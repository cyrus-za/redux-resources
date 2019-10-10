interface UI {
    loaded: boolean
    loading: boolean
}

interface Meta {
    total: number
    per_page: number
    current_page: number
    last_page: number
    from: number
    to: number
}

interface ApiException {
    status: number
    message: string
    fields?: Array<object>
}

export interface Item {
    ui: UI
    data: object | null
    error: ApiException | null
}

export interface Observer {
    ui: UI
    error: ApiException | null
}

export interface PaginatedApiResponse {
    total: number
    per_page: number
    current_page: number
    last_page: number
    from: number
    to: number
    data: Array<any>
}

export interface PaginatedResponse {
    ui: UI
    meta: Meta
    data: Array<any>
    error: ApiException | null
}

