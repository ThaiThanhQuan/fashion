export interface IRequest {
    url: string
    method: string
    body?: unknown
    queryParams?: unknown
    useCredentials?: boolean
    headers?: Record<string, string>
    nextOption?: RequestInit
}

export interface IBackendRes<T> {
    code: number
    message: string
    result: T
}

export interface IPageResponse<T> {
    content: T[]
    pageNumber: number
    pageSize: number
    totalElements: number
    totalPages: number
    last: boolean
}

export interface IPageable {
    page?: number
    size?: number
}