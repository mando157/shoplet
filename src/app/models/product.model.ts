export type ProductModel = {
    id: number,
    name: string,
    price: number,
    description: string,
    discount: number,
    img: string,
}

export type ProductCartModel = ProductModel & {
    quantity: number;
}