import { IProduct } from "./product.type"

export interface ICreateOrder {
    addressId: string
    paymentMethod: string
    orderItems: ICreateOrderItem[]
}

export interface ICreateOrderItem {
    productId: string
    size: string
    quantity: number
}

export interface IOrder {
    id: string
    userId: string
    addressId: string
    subtotal: number
    shippingFee: number
    tax: number
    grandTotal: number
    status: string
    paymentMethod: string
    paymentStatus: string
    createdAt: string
    orderItems: IOrderItem[]
}

export interface IOrderItem {
    id: string
    product: IProduct
    size: string
    quantity: number
    price: number
    totalPrice: number
}