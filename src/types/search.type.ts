import { ICollection } from "./collection.type"
import { IProduct } from "./product.type"

// types/search.type.ts
export interface ISearchResponse {
    products: IProduct[]
    collections: ICollection[]
}