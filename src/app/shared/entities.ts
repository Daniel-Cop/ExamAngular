export interface IProduct {
    name: string,
    image: string,
    priceHT: number,
    quantity: number,
}

export interface ICart {
    totalAmount: number,
    items: ICartItem[],
}

export interface ICartItem {
    article: IProduct,
    quantity: number,
}