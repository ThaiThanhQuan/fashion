import { IProduct } from "./product.type"

export interface IWishlist {
    id: string
    userId: string
    product: IProduct
}