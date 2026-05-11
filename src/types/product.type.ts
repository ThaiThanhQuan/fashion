import { IPageable } from "./common.type"

export interface IProductFilter extends IPageable {
    categoryId?: string
    active?: boolean
    featured?: boolean
    minPrice?: number
    maxPrice?: number
    productSize?: string
    sortBy?: string
}

export interface IProduct {
    id: string
    title: string
    slug: string
    label: string
    description: string
    price: number
    active: boolean
    featured: boolean
    categoryId: string
    thumbnail?: string
    images?: string[]
    createdAt: string
}

export interface IProductVariant {
    id: string
    size: string
    stock: number
    productId: string
}

export interface IProductImage {
    id: string
    imagePath: string
    thumbnail: boolean
    productId: string
}

export interface ICategoryProduct {
    id: string
    name: string
}
