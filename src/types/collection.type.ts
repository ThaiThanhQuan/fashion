import { IArtist } from "./artist.type"
import { IPageable } from "./common.type"
import { IProduct } from "./product.type"

export interface ICollectionFilter extends IPageable {
    seasonId?: string
    categoryId?: string
    year?: string
}

export interface ICollection {
    id: string
    title: string
    slug: string
    year: string
    price: number
    designIdeas: string
    description: string
    thumbnail: string
    season: ISeason
    categoryCollection: ICategoryCollection
    artist: IArtist
    products: IProduct[]
}

export interface ISeason {
    id: string
    name: string
}

export interface ICategoryCollection {
    id: string
    name: string
}